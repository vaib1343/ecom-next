import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Status } from "../constant";

const verifyToken = createAsyncThunk(
    "user/fetchUser",
    async (payload, thunkApi) => {
        try {
            const resposne = await axios.get("/api/auth/");
        } catch (error) {
            console.log(error);
            thunkApi.rejectWithValue("error");
        }
    }
);

export const login = createAsyncThunk(
    "user/login",
    async (payload, thunkApi) => {
        const user = await axios.post("api/auth/login", payload);
        console.log("data", user.data);
        return user.data;
    }
);

export const register = createAsyncThunk(
    "user/register",
    async (payload, thunkApi) => {
        const user = await axios.post("api/auth/register", payload);
        return user.data;
    }
);

export const userSlice = createSlice({
    name: "User",
    initialState: {
        data: {},
        status: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.status = Status.PENDING;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = Status.FULFILLED;
        });
        builder.addCase(login.rejected, (state) => {
            state.status = Status.REJECTED;
        });
    },
});

export default userSlice.reducer;
