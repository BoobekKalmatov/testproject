import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../api/axios'

export const registerpostdata = createAsyncThunk(
    'register/post',

    async (data, { rejectWithValue }) => {

        try {
            const res = await axios.post('/auth/local/register', data);

            if (!res.data) {
                throw new Error()
            }

            return res.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);


const regisSlice = createSlice({
    name: 'regis',

    initialState: {
        loading: '',
        data: null
    },

    extraReducers: {
        [registerpostdata.pending]: (state) => {
            state.loading = true
        },
        [registerpostdata.fulfilled]: (state) => {
            state.loading = false
        },
        [registerpostdata.rejected]: (state) => {
            state.loading = false
        },
    }
});


export default regisSlice.reducer; 