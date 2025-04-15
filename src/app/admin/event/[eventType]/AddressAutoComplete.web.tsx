import { AUTOCOMPLETE_API } from "@/utils/constant";
import React, { useState, useEffect } from "react";
import { LocationField } from "./helper";

interface Suggestion {
  display_name: string;
  lat: string;
  lon: string;
}

interface Props {
  getLocationData: (locationData: LocationField) => void
  label: string,
  name: string,
  required: boolean
  placeholder?: string;
  errorMsg?: string;
  errorKey?: boolean
}


const AddressAutocomplete: React.FC<Props> = ({
  getLocationData,
  label,
  name,
  required,
  errorKey,
  errorMsg,
  placeholder = "Enter event location",
}) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Debounce logic inside component
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!debouncedQuery.trim()) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await fetch(`${AUTOCOMPLETE_API(debouncedQuery)}`);
        const data = await res.json();
        setSuggestions(data);
        setShowDropdown(true);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    fetchSuggestions();
  }, [debouncedQuery]);

  const handleSelect = (fullLocation: Suggestion) => {
    setQuery(fullLocation.display_name);
    setShowDropdown(false);
    const locationFields = {
      latitude: parseFloat(fullLocation.lat),
    longitude: parseFloat(fullLocation.lon),
      location: fullLocation.display_name,
    };

    getLocationData(locationFields)
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-bold text-gray-700 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`
            block w-full rounded-md px-4 py-2 text-md h-12
            placeholder-gray-400 border transition-all
            ${
              errorKey
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            }
            focus:outline-none focus:ring-1
          `}
          placeholder={placeholder}
        />
        {showDropdown && suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg max-h-60 overflow-y-auto">
            {suggestions.map((s, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(s)}
              >
                {s.display_name}
              </li>
            ))}
          </ul>
        )}

        {errorMsg && errorKey && (
          <p className="text-sm text-red-500 mt-1">{errorMsg}</p>
        )}
      </div>
    </div>
  );
};

export default AddressAutocomplete;
