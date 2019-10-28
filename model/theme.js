
// 业务对象
// theme、banner、spu、sku、address、user

import {Http} from "../utils/http";

class Theme {
    static locationA = 't-1'
    static locationE = 't-2'
    static locationF = 't-3'
    static locationH = 't-4'

    themes = []

    async getThemes() {
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
        this.themes =  await Http.request({
            url: `theme/by/names`,
            data: {
                names
            }
        })
    }

    async getHomeLocationA() {
        return this.themes.find(t => t.name === Theme.locationA) // 比 for 循环可读性好很多
    }

    async getHomeLocationE() {
        return this.themes.find(t => t.name === Theme.locationE) // 比 for 循环可读性好很多
    }

    static getHomeLocationESpu() {
        return Theme.getThemeSpuByName(Theme.locationE)
    }

    static getThemeSpuByName(name) {
        return Http.request({
            url: `theme/name/${name}/with_spu`
        })
    }
}

export {
    Theme
}
