import { JSONResponse } from "../models/JSONResponse";

export const getUsers = async (pageNo: number): Promise<JSONResponse> => {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}users?page=${pageNo}`);
  return res.json();
};
