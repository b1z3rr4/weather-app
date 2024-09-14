type Location = { 
    lat: number;
    lon: number;
}

/**
 * 
 * @returns Promise<unknown>
 */
export function geolocation(): Promise<Location> {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
    
                const location: Location = { 
                    lat,
                    lon
                };

                resolve(location);
            })
        } else {
            reject(new Error('Navegador não suporta a api de geolocalização.'));
            return;
        }
    })
};
