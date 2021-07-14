
const rondal = "http://your.network.ip:3000";
const curl = {
    get: async function(url: string): Promise<any> {
        const prom = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.responseType = "json";
            xhr.onload = () => {
                return resolve(xhr.response);
            }
            xhr.onerror = (error: ProgressEvent) => {
                console.error(error);
            }
            xhr.open('GET', url);
            xhr.send();
        });

        return prom;
    }
}

window.onload = () => {
    const button = document.querySelector('#get-api');
    button.addEventListener('click', (event: Event) => {
        event.preventDefault();
        console.log('call curl', curl);

        curl.get(rondal + '/api/iap').then((data: any)=>{
            console.log(data);

            const result = document.querySelector('#result');
            result.innerHTML = JSON.stringify(data);
        }).catch((e) => {
            console.log(e);
        })
    });
}
