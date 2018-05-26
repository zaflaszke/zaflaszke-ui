import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const muiTheme = getMuiTheme({
    dialog: {
        titleFontSize: 16,
        bodyFontSize: 14,
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
    flatButton: {
        fontSize: "12px",
        primaryTextColor: "#000000"
    },
    fontFamily: "'Amatic SC', cursive",
    textField: {
        focusColor: "seagreen",
        hintColor: "gray",
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