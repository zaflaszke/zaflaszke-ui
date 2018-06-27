import BaseService from "./base-service";
import axios from "axios";


class RegionService extends BaseService {
    constructor(basePath) {
        super(basePath);
        this.path = this.basePath + "/voivodeship";
    }

    getAllRegions = () => {
        return axios.get(this.path);
    }
}

export default RegionService;