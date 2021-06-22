import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  overrides: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
      size: "large",
      color: "primary",
      outlined: {
        borderRadius: "0",
      },
    },
    MuiButton: {
        // backgroundColor: 'red',
        text: {
        color: 'green'
      }
    }
  },
});
