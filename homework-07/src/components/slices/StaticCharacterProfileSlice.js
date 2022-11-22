import { createSlice } from '@reduxjs/toolkit';

export const StaticCharacterProfilSlice = createSlice({
  name: 'static-character-profile',
  initialState: {
    characterImg: '',
    characterName: '',
    characterStatus: '',
    characterSpecies: '',
    characterGender: '',
    characterOrigin: '',
    characterLocation: '',
  },
  reducers: {
    setCharacterImg: (state, action) => {
      state.characterImg = action.payload;
    },
    setCharacterName: (state, action) => {
      state.characterName = action.payload;
    },
    setCharacterStatus: (state, action) => {
      state.characterStatus = action.payload;
    },
    setCharacterSpecies: (state, action) => {
      state.characterSpecies = action.payload;
    },
    setCharacterGender: (state, action) => {
      state.characterGender = action.payload;
    },
    setCharacterOrigin: (state, action) => {
      state.characterOrigin = action.payload;
    },
    setCharacterLocation: (state, action) => {
      state.characterLocation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCharacterImg,
  setCharacterName,
  setCharacterStatus,
  setCharacterSpecies,
  setCharacterGender,
  setCharacterOrigin,
  setCharacterLocation,
} = StaticCharacterProfilSlice.actions;

export default StaticCharacterProfilSlice.reducer;