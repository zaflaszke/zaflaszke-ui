import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const muiTheme = getMuiTheme({
    fontFamily: "'Amatic SC', cursive;",
    flatButton: {
        fontSize: "12px",
        primaryTextColor: "#000000"
    },
    dialog: {
        titleFontSize: 16,
        bodyFontSize: 14,
    },
    textField: {
        focusColor: "seagreen",
        hintColor: "gray",
    },
    datePicker: {
        color: "black",
        textColor: "#FFFFFF",
        calendarTextColor: "seagreen",
        selectColor: "seagreen",
        selectTextColor: "#FFFFFF",
        calendarYearBackgroundColor: "#FFFFFF",
        headerColor: "seagreen"
    },
    timePicker: {
        color: "black",
        textColor: "#FFFFFF",
        calendarTextColor: "seagreen",
        selectColor: "seagreen",
        selectTextColor: "#FFFFFF",
        calendarYearBackgroundColor: "#FFFFFF",
        headerColor: "seagreen",
        accentColor: "seagreen",
        clockColor: "red",
        clockCircleColor: "white",
    },
    toggle: {
        thumbOnColor: "seagreen",
        thumbOffColor: "gray",
        thumbDisabledColor: "blue",
        trackOnColor: "lightgray",
        trackOffColor: "lightgray",
        labelColor: "black",
        trackRequiredColor: "black"
    },
});