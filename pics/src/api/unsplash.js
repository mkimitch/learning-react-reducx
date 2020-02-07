import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID 3841837c00839d5d07787589fe3fb5738a947017b7c5fb4fdb21d9c986da821e"
    }
});
