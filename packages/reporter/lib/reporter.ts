
interface ErrorCatch{
    onError():void
}
interface RequestList{
    addItem():void
}   
interface PerformanceMonitor{
    getPerformanceData():Promise<any>,
    resetPv():void
}
export default class Reporter{
    private $options:any
    private errorcatch:any={} as ErrorCatch
    private requestlist:any = {} as RequestList
    private performanceMonitor={} as PerformanceMonitor
    constructor(options:any){
        this.$options=options;
        this.init()
    }
    private init(){
        this.errorcatch.onError(
            this.requestlist.addItem
        )
        this.performanceMonitor.getPerformanceData().then(res=>{
            this.requestlist.addItem(res)
        })
    }
}