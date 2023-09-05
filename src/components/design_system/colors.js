const ColorsList = [
    {
        name: 'primary',
        colors: [
            {id: "100", value: "#46A3FF"},
            {id: "200", value: "#004283"},
            {id: "300", value: "#A3D1FF"}
        ]
    },
    {
        name: 'secondary',
        colors: [
            {id: "100", value: "#004283"},
            {id: "200", value: "#46A3FF"},
            {id: "300", value: "#A3D1FF"},
        ]
    },
    {
        name: 'green',
        colors: [
            {id: "100", value: "#015901"},
            {id: "200", value: "#019701"},
            {id: "300", value: "#04BC04"},
            {id: "400", value: "#B0D8B0"}
        ]
    },
    {
        name: 'red',
        colors: [
            {id: "100", value: "#9C0000"},
            {id: "200", value: "#D00000"},
            {id: "300", value: "#FF2222"},
            {id: "400", value: "#F0B0B0"}
        ]
    },
    {
        name: 'blue',
        colors: [
            {id: "100", value: "#013A8F"},
            {id: "200", value: "#0054D2"},
            {id: "300", value: "#1E78FF"},
            {id: "400", value: "#5B9CFF"}
        ]
    },
    {
        name: 'yellow',
        colors: [
            {id: "100", value: "#E6D300"},
            {id: "200", value: "#FFEA00"},
            {id: "300", value: "#FFF04B"},
            {id: "400", value: "#FFF8B0"}
        ]
    },
    {
        name: 'gray',
        colors: [
            {id: "100", value: "#F9F9F9"},
            {id: "200", value: "#E1E1E1"},
            {id: "300", value: "#BAB9B9"},
            {id: "400", value: "#8B8B8B"},
            {id: "500", value: "#686868"},
            {id: "600", value: "#585858"},
            {id: "700", value: "#4C4C4C"},
            {id: "800", value: "#242424"},
            {id: "900", value: "#1A1A1A"},
            {id: "1000", value: "#0B0B0B"}
        ]
    }
];

export const getColor = (colorPassed) => {
    colorPassed.includes('-') ? colorPassed = colorPassed.split('-') : colorPassed == 'black' || colorPassed == 'white' ? 'white' : 'black';

    let color;

    switch (colorPassed) {
        case 'black':
            color = '#101010'
            break;

        case 'white':
            color = '#F9F9F9'
            break;
    
        default:
            color = ColorsList.filter(color => color.name === colorPassed[0])[0].colors.filter(color => color.id === colorPassed[1])[0].value
            break;
    }
    
    return color;
}

export const getColors = () => {
    return ColorsList;
}