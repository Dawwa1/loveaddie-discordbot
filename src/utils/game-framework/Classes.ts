class Vector2 {
    x:number
    y:number

    constructor(x: number, y:number){
        this.x = x;
        this.y = y;
    }

    Translate(pnt: Point2) {
        return new Vector2(this.x + pnt.x, this.y + pnt.y);
    }
}


class Point2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
    Translate(vec: Vector2) {
        return new Point2(this.x + vec.x, this.y + vec.y)
    };
    GetVector(p1: Point2, p2: Point2) {
        return new Vector2(p1.x - p2.x, p1.y - p2.y);
    }
    
};
