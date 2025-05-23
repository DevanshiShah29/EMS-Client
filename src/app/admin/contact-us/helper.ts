
// Types
import { IRequestType } from "./types";

export const INITIAL_CONTATC_INFO = {
    _id: "",
    name: "",
    email: "",
    subject: "",
    message: "",
    status: "",
    createdAt: "",
    __v: 0
}

export const statusColor = {
    pending: "bg-yellow-100 text-yellow-700",
    responded: "bg-green-100 text-green-700",
  };

export const getPaginatedData = (dataArray : IRequestType[], currentPage : number,  itemsPerPage : number ) => {
    const result = dataArray.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    return result
}

export const getSearchResults = (
    events: IRequestType[],
    keyword: string
) => {
    const lowerKeyword = keyword.toString().toLowerCase();
    return events.filter(event =>
      event.name.toLowerCase().includes(lowerKeyword) ||
      event.email.toLowerCase().includes(lowerKeyword) ||
      event.subject.toLowerCase().includes(lowerKeyword) || 
      event.message.toLowerCase().includes(lowerKeyword) || 
      event.status.toLowerCase().includes(lowerKeyword)
    );
}