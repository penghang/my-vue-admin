const defaultColor = {
    themeColor:"20a0ff"
}

const theme = {
    state:{
        themeColor:defaultColor.themeColor
    },
    mutations:{
        setThemeColor:function(state,curcolor){
            this.state.themeColor = curcolor
        }
    }
}
export default theme
