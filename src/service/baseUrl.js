/** @format */

import axios from "axios";
import { api_url } from "../lib/constant";

export const api = axios.create({
	baseURL: api_url,
	
});
