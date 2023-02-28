 import Hero from "../components/Hero"
 import Navbar from "../components/Navbar"
  function Home (){
    return (
    <>    <Navbar />
    <Hero 
   cName="Mobile"
   title="Chose your Mobile"
   buttonText="Search Brand"
   url="/"
    btnClass="Show"
   />
    
    </>
     );
} 

 export default Home;

