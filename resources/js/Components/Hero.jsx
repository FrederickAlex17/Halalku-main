import { Link } from "@inertiajs/react"

import b from "/resources/images/pngwing.com.png"

import c from "/resources/images/makan.png"

import d from "/resources/images/daging icon.png"
export const fontWeights = {
    Thin: 100,
    UltraLight: 200,
    Light: 300,
    Regular: 400,
    Medium: 500,
    Semibold: 600,
    Bold: 700,
    Heavy: 800,
    Black: 900
  };
const Hero = () => {
    return (
        <>         <div className="hero min-h-screen bg-base-100">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(/uploads/background.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w">
                        <h1 className="mb-5 text-5xl font-thin">Assalamualaikum,</h1>
                        <h1 className="mb-5 text-5xl font-heavy">
                            Bingung berwisata? Silahkan Langsung Cari!</h1>
                        <div className="flex items-center justify-center space-x-2">
                            <button className="btn btn-secondary btn-lg">
                                <img src={b} />
                                <Link to="/">Wisata Menarik</Link>
                            </button>
                            <button className="btn btn-secondary btn-lg">
                                <img src={c} />
                                <Link to="/">Makanan Khas</Link>
                            </button>
                            <button className="btn btn-secondary btn-lg">
                                <img src={d} />
                                <Link to="/">Jenis Daging</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="hero min-h-screen bg-primary">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/uploads/background.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-white">Assalamualaikum,
                            Bingung berwisata? Silahkan Langsung Cari!
                        </h1>
                        <p className="py-6 text-3xl text-white">Rekomendasi Wisata Halal Cirebon</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero