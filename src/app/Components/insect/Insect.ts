

class Insect{
  public static count:number = 0
  private id:number
  private _scientificFullname:string
  private _usualName:string
  private _imgReference:string



  constructor(scientificFullname:string, usualName:string, imgReference:string ){
    this.id = ++Insect.count
    this._scientificFullname = scientificFullname
    this._usualName = usualName
    this._imgReference = imgReference
  }


  get scientificFullname(): string {
    return this._scientificFullname;
  }

  get usualName(): string {
    return this._usualName;
  }
  get insectId():number{
    return this.id;
  }

  get imgReference(): string {
    return this._imgReference;
  }
}




export  default Insect


