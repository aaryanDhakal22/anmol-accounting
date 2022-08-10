const randomStrGen = ()=>{
    const len = 24
    const arr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var ans = '';
    for (var i = len; i > 0; i--) {
        ans += 
          arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
}
export default randomStrGen