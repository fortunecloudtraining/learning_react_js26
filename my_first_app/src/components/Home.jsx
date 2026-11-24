import LaptopImage from "../assets/laptop.jpg";

const Home = () => {
    return(
        <div>
            <section className="bg-accent" id="home">
                <div className="container">
                    <div className="row">
                        <div className="md:col-6 p-6 fg-contrast-primary">
                            <h1>Welcome to My Site</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non iste quisquam, earum fugiat minus temporibus dolorem expedita placeat provident amet officia. Praesentium, vel. Perspiciatis nihil blanditiis ipsum obcaecati exercitationem.</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non iste quisquam, earum fugiat minus temporibus dolorem expedita placeat provident amet officia. Praesentium, vel. Perspiciatis nihil blanditiis ipsum obcaecati exercitationem.</p>
                             
                        </div>
                        <div className="md:col-6 p-6">
                            <img src={LaptopImage} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Home