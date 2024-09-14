export type Weather = {
    app_temp: number;
    city_name: string;
    country_code: string;
    weather: {
        code: number;
        description: string;
        icon: string;
    }
}

type ResponseApi = { 
    count: number;
    data: Array<Weather>;
}

export async function weather(lat: string, lon: string) {
    const apiKey = "122e992a94c349738ffdd8c9aacfed9b";
    const url = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}6&lon=${lon}`;

    const response = await fetch(url);
    const data = await response.json() as ResponseApi;

    return data.data[0];
};
