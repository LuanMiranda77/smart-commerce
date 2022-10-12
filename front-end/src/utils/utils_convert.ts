export class UtilsConvert {
    static fileConvertSizeByte = (bytes: number) => {
        const si = true, dp = 1
        const thresh = si ? 1000 : 1024;
        if (Math.abs(bytes) < thresh) {
            return bytes + ' B';
        }
        const units = si
            ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
            : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
        let u = -1;
        const r = 10 ** dp;
        do {
            bytes /= thresh;
            ++u;
        } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
        return bytes.toFixed(dp) + ' ' + units[u];
    }

    static formatCurrency = (value: number) => {
        let valor = '';
        if (value !== undefined) {
            valor = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        }
        return valor;
    }

    static convertArrayNumberToMoney(array: any[]) {
        let _array = array.map(valor => this.formatCurrency(valor));
        return _array;
    }

} 