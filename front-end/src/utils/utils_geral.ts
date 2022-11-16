
export class UtilsGeral {

    public static getEmogi() {
        return ['🤑', '😀', '😱', '😰', '😥'];
    }


    static removeMask(value: any):string {
        let v = value.replaceAll(/\D/g, '');
        // v = v.replaceAll('-', '');
        // v = v.replaceAll('/', '');
        return v;
    }

    




}