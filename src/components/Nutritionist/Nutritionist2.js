import React,{useEffect,useState} from "react";
import "./Nutritionist.css";
import { Link } from "react-router-dom";
import axios from 'axios';
const Nutritionist = () => {
  const [nutritionistData,setNutitionistData]=useState([]);
  useEffect(() => {
    getData();
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);

  const getData=async()=>{
    const response=await axios.get("http://localhost:8082/getAllNutritionists");
    setNutitionistData(response.data);
  }

    return (
      <div className="main-nut">
        <h1 className="h1-main-nut">Meet the Nutritionists</h1>
        <div className="nut">
          <div className="nut1">
            <div className="nu1-img">
              <img
                className="img-nut"
                src="https://cdn-lfbmd.nitrocdn.com/HuCAEeaUmYvETYAaFWCUfJrqMgeHeujz/assets/images/optimized/rev-e373694/shahprachi.com/wp-content/uploads/2023/03/aboutusimage.jpg"
                alt=""
              ></img>
            </div>
            <div className="inner-nut">
              <h2>Prachi Shah</h2>
              <h5 className="nut1-h5">Education</h5>
              <ul className="nut-ul">
                <li className="nut-li">
                  Bachelors’ in Sciences – Foods and Nutrition [specialised in
                  dietetics]
                </li>
                <li className="nut-li">
                  Post Graduate in Clinical Nutrition and Dietetics [PGCND]
                  [specialised in Diabetes and Cardiac nutrition]{" "}
                </li>
                <li className="nut-li">
                  Certified Pre and Post Natal Fitness Trainer from Indian
                  Academy of Fitness Training
                </li>
              </ul>
              <h5>Specialist in</h5>
              <ul className="nut-ul">
                <li className="nut-li">Clinical Nutritionis</li>
                <li className="nut-li">
                  Certified Type 2 Diabetes Prevention Expert
                </li>
                <li className="nut-li">Researcher</li>
                <li className="nut-li">Food Enthusiast</li>
                <li className="nut-li"> Certified Sports Nutritionist</li>
              </ul>
              <p>
                Nutritionist and Dietitian to more than thousands and counting,
                working as an online & offline nutritionist for over 7 years.Her
                clientele is from all walks of life ranging from actors, models,
                producers, fitness trainers, socialites, CEOs, yoga
                practitioners, architects, builders, media professionals,
                housewives, pregnant women, kids & teenagers.
              </p>
              <div className="contact-nut">
                <Link className="link-nut" to="https://shahprachi.com/">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="nut2">
            <div className="nu1-img">
              <img
                className="img-nut"
                src="https://www.balancenutrition.in/images/aboutUs/siddhi_patil.jpg"
                alt=""
              ></img>
            </div>
            <div className="inner-nut">
              <h2>Akansha</h2>
              <h5 className="nut1-h5">Education</h5>
              <ul className="nut-ul">
                <li className="nut-li">PgD Nutrition & Dietetics</li>
              </ul>
              <h5>Specialist in</h5>
              <ul className="nut-ul">
                <li className="nut-li">Clinical Nutritions</li>
                <li className="nut-li">Sports Nutrition</li>
                <li className="nut-li">Hormonal Imbalance Management</li>
              </ul>
              <h5>Number of clients</h5>
              <h6>1800+</h6>
              <p>
                Akansha is a skilled nutrition and dietetics professional with a
                Postgraduate Diploma in Nutrition & Dietetics. Specializing in
                Clinical Nutrition, Sports Nutrition, and Hormonal Imbalance
                Management, she offers comprehensive expertise in tailoring
                dietary plans to address specific health needs. With a clientele
                exceeding 1800 individuals, Akansha demonstrates a strong track
                record of providing personalized nutrition guidance, optimizing
                health outcomes, and fostering well-being across diverse
                populations.
              </p>
              <div className="contact-nut">
                <Link
                  className="link-nut"
                  to="https://www.balancenutrition.in/"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="nut4">
            <div className="nu1-img">
              <img
                className="img-nut"
                src="https://www.balancenutrition.in/images/aboutUs/Chelsi-D1.png"
                alt=""
              ></img>
            </div>
            <div className="inner-nut">
              <h2>Chelsi</h2>
              <h5 className="nut1-h5">Education</h5>
              <ul className="nut-ul">
                <li className="nut-li">PgD Nutrition & Dietetics</li>
              </ul>
              <h5>Specialist in</h5>
              <ul className="nut-ul">
                <li className="nut-li">Weight Loss</li>
                <li className="nut-li">Diabetes</li>
                <li className="nut-li">Thyroid Reversal</li>
              </ul>
              <h5>Number of clients</h5>
              <h6>3000+</h6>
              <p>
                Chelsi, a seasoned Senior Nutritionist, brings over four years
                of extensive experience in the field. Holding a Postgraduate
                Diploma in Nutrition & Dietetics, she specializes in Weight
                Loss, Diabetes management, and Thyroid Reversal. With a client
                base exceeding 2000 individuals, Chelsi demonstrates proficiency
                in crafting tailored nutritional plans to address diverse health
                goals and conditions. Her expertise lies in empowering clients
                to achieve sustainable lifestyle changes, promoting optimal
                health and well-being..
              </p>
              <div className="contact-nut">
                <Link
                  className="link-nut"
                  to="https://www.balancenutrition.in/"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="nut5">
            <div className="nu1-img">
              <img
                className="img-nut"
                src="https://static.healthifyme.com/tpng-images/experts/original/3bb8cf00-cb38-4aed-a146-1f83e6a9d6ce.png"
                alt=""
              ></img>
            </div>
            <div className="inner-nut">
              <h2>Neha Shirsat</h2>
              <h5 className="nut1-h5">Education</h5>
              <ul className="nut-ul">
                <li className="nut-li">
                  Bachelors in Clinical Nutrition and Dietetics
                </li>
                <li className="nut-li">
                  Masters in Clinical Nutrition and dietetics{" "}
                </li>
              </ul>
              <h5>Specialist in</h5>
              <ul className="nut-ul">
                <li className="nut-li">Diabetes Educator</li>
                <li className="nut-li">PCOS Specialist</li>
                <li className="nut-li">Weightloss Specialist</li>
              </ul>
              <p>
                Neha Sanjay Shirsat embodies the philosophy that progress, no
                matter how gradual, ultimately leads to significant
                achievements. By emphasizing consistency and perseverance, she
                encourages individuals to stay focused on their health and
                wellness goals without being discouraged by the pace of their
                journey. As a Diet Coach, Neha translates this belief into
                actionable strategies, guiding her clients to make small,
                sustainable changes in their dietary habits and lifestyle
                choices every day.
              </p>
              <div className="contact-nut">
                <Link
                  className="link-nut"
                  to="https://www.healthifyme.com/dietitians/neha/?ref=6112"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="nut6">
            <div className="nu1-img">
              <img
                className="img-nut"
                src="https://static.healthifyme.com/tpng-images/experts/original/d15a043d-e8f2-4cdd-95c8-f6448526d800.png"
                alt=""
              ></img>
            </div>
            <div className="inner-nut">
              <h2>Kajol Jain</h2>
              <h5 className="nut1-h5">Education</h5>
              <ul className="nut-ul">
                <li className="nut-li">
                  Bachelors in Home Science (Food Science and Nutrition)
                </li>
                <li className="nut-li">Masters in Foods & nutrition </li>
              </ul>
              <h5>Specialist in</h5>
              <ul className="nut-ul">
                <li className="nut-li">Diabetes Educator</li>
                <li className="nut-li">Therapeutic Nutrition</li>
                <li className="nut-li">Weightloss Specialist</li>
              </ul>
              <p>
                Kajol Jain's belief in the power of perseverance underscores her
                approach as a Diet Coach, particularly in the context of weight
                loss journeys. She views determination as a fundamental trait
                essential for embarking on and sustaining progress in fitness
                endeavors. Through her coaching, Kajol emphasizes the
                significance of maintaining a steadfast commitment to one's
                goals, especially when faced with obstacles or setbacks along
                the way. As a Diet Coach, Kajol guides individuals in
                translating this determination into actionable strategies that
                support their weight loss goals.
              </p>
              <div className="contact-nut">
                <Link
                  className="link-nut"
                  to="https://www.healthifyme.com/dietitians/kajol/?ref=6130"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="nut3">
            <div className="nu1-img">
              <img
                className="img-nut"
                src="https://www.vasundhara.me/uploads/3/0/5/7/30579955/published/vasusmallround.png?1488266986"
                alt=""
              ></img>
            </div>
            <div className="inner-nut">
              <h2>Vasundhara Agrawal</h2>
              <h5 className="nut1-h5">Education</h5>
              <ul className="nut-ul">
                <li className="nut-li">
                  Bachelors’ in Sciences – Foods and Nutrition [specialised in
                  dietetics]
                </li>
                <li className="nut-li">
                  Post Graduate in Clinical Nutrition and Dietetics [PGCND]
                  [specialised in Diabetes and Cardiac nutrition]{" "}
                </li>
                <li className="nut-li">
                  Certified Pre and Post Natal Fitness Trainer from Indian
                  Academy of Fitness Training
                </li>
              </ul>
              <h5>Specialist in</h5>
              <ul className="nut-ul">
                <li className="nut-li">Weight Loss / Weight Gain Diets</li>
                <li className="nut-li">Sports Nutrition</li>
                <li className="nut-li">Workout Nutrition</li>
                <li className="nut-li">Diabetes assist</li>
                <li className="nut-li"> Hypertension</li>
                <li className="nut-li">Pre / Post Pregnancy & Kids dit</li>
              </ul>
              <p>
                ​​Vasundhara Agrawal is a Bangalore-based diet & active
                lifestyle expert and an independent food consultant who strives
                to take the confusion out of healthy eating. ​Having closely
                worked as a dietitian / nutritionist with top hospitals like
                Fortis and Max healthcare, she believes in a philosophy that
                diets, just like clothes, should be tailor-made because every
                individual is different and there is no one-size-fits-all.
              </p>
              <div className="contact-nut">
                <Link className="link-nut" to="https://www.vasundhara.me/">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Nutritionist;
