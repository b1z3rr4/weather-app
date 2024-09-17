export type tForecast = {
  datetime: string;
  temp: number;
  weather: {
    code: number;
    description: string;
    icon: string;
  };
};
type ResponseApiF = {
  count: number;
  data: Array<tForecast>;
};

export async function forecast(lat: string, lon: string) {
  const apiKey = '35a8c605405944298834457a9d80d6f9';
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${apiKey}&lat=${lat}&lon=${lon}&lang=pt&days=5&units=M`;

  const getForecast = await fetch(url);
  const response = (await getForecast.json()) as ResponseApiF;
  console.log({ response });
  return response.data;
}
