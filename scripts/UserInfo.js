export default class UserInfo {
    constructor( name, info ) {
        this._name = name;
        this._info = info;
    } 

    getUserInfo() {
        this._name.value = this._name.textContent;
        this._info.value = this._info.textContent;
        return {
            name: this._name.value,
            info: this._info.value
        }
    }

    setUserInfo(name, info) {
        this._name.textContent = name.value;
        this._info.textContent = info.value;
    }
}