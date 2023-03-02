import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchUser = createAsyncThunk(
    'auth/fetch',

    async (user, {rejectWithValue}) => {
        try {
            const res = await axios.post('/auth/local', user)

            if (!res.data) {
                throw new Error()   
            }

            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

const authSlice = createSlice({
    name: 'auth',

    initialState: {
        loading: '',
        user: null
    },

    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.loading = 'loading';
        },

        [fetchUser.fulfilled]: (state, action) => {
            state.loading = 'complete';

            state.user = {
                token: action.payload.jwt,
                ...action.payload.user
            }
        },

        [fetchUser.rejected]: (state) => {
            state.loading = 'error';
        }
    }


})


export default authSlice.reducer; 




// {
//     "sub": "auth0|63ff34e52cef38f4fa3dbd66",
//     "nickname": "boobekkalmatov2",
//     "name": "boobekkalmatov2@gmail.com",
//     "picture": "https://s.gravatar.com/avatar/c9f7154f28b107ce69e9aa809ec072b8?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbo.png",
//     "updated_at": "2023-03-01T11:20:21.216Z"
//   }
  