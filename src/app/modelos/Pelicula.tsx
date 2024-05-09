export class Pelicula{
    public codPelicula: number;
    public nombrePelicula: string;
    public protagonistaPelicula: string;
    public codGeneroPelicula: string;
    public imagenPelicula: string;
    public imagenPeliculaBase64: string;

    constructor(codp: number, nomp:string, prot:string, codg:string, imag:string, base:string){
        this.codPelicula = codp;
        this.nombrePelicula = nomp;
        this.protagonistaPelicula = prot;
        this.codGeneroPelicula= codg;
        this.imagenPelicula = imag;
        this.imagenPeliculaBase64 = base; 
    }

}