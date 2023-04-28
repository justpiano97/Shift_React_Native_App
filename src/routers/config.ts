const Main = {
  Home: 'Home',
  Shift: 'ShiftSeeker',
  Employer: 'Employer',
};

const Shift = {
  Auth: {
    RegisterBase: 'ShiftSeeker_Register_Base',
    RegisterProfile: 'ShiftSeeker_Register_Profile',
    RegisterComplete: 'ShiftSeeker_Register_Complete',
  },
};

const Employer = {
  Auth: {
    RegisterBase: 'Employer_Register_Base',
    Terms: 'Terms',
  },
  Main: {
    ShiftPost: 'Shift_Post',
    ShitList: 'Shit_List',
    ShitDetail: 'Shift_Detail',
  },
};

export const AppRouter = { Main, Shift, Employer };
