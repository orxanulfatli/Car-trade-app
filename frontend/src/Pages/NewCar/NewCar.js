import React, { useEffect } from "react";
import "./NewCar.css";
import { useState } from "react";
import * as Yup from "yup";
import FormControl from "../../components/FormControl/FormControl";
import TextError from "./../../components/TextError/TextError";
import { Formik, ErrorMessage, Field,Form } from "formik";
import ImagePreview from "./CarImage/ImagePreview/ImagePreview";
import ImageInput from "./CarImage/ImageInput/ImageInput";
import withImagePreview from "./CarImage/withImagePreview/withImagePreview";
import image from "../../assets/28.05.2022_22.48.31_REC.jpg";
import {
  body,
  carFeatures,
  driveType,
  fuel,
  transmission,
  country,
  releaseYear,
  engineCapacity,
} from "../../data";
import { color } from "../../data";
import { Container, Row, Col } from "react-bootstrap";

import { useDispatch,useSelector } from "react-redux";
import { addCarAC } from "../../Global/actions/carActions";
import { CAR_ACTION_CONSTANTS } from "../../Global/actions/action.constants";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ToastMsg from "./ToastMsg/ToastMsg";
import { useNavigate } from "react-router-dom";
import { ScrollToFieldError } from "./ScrollToFieldError/ScrollToFieldError";
import Spinner from '../../components/Spinner/Spinner'

const SingleImageUpload = withImagePreview({ control: true })(
  ImagePreview,
  ImageInput
);
const MultiplyImageUpload = withImagePreview({ control: false })(
  ImagePreview,
  ImageInput
);
const NewCar = () => {
  const dispatch = useDispatch();
  const { marks, models } = useSelector(state => state.dropdown);
  const { isLoading, success, error } = useSelector((state) => state.car);
  const navigate = useNavigate()

  useEffect(() => {
    if (success) {
      toast.success(<ToastMsg/>);
      dispatch({ type: CAR_ACTION_CONSTANTS.NEW_CAR_RESET })
      navigate('/')
      
    }
    if (error) {
      toast.error(error)
      dispatch({type:CAR_ACTION_CONSTANTS.CLEAR_ERROR})
    }
  },[success,error,dispatch])

  const [files, setFiles] = useState({ item: null, items: [] });
  const initialValues = {
    mark: "",
    model: "",
    body: "",
    kmsDriven: "",
    lengthUnit: "",
    color: "",
    cost: "",
    currency: "",
    fuel: "",
    driveType: "",
    transmission: "",
    release: "",
    engineCapacity: "",
    enginePower: "",
    credit: "",
    barter: "",
    additionalInformation: "",
    carFeatures: [],
    front: null,
    back: null,
    salon: null,
    firstName: "",
    country: "",
  };
  const SignupSchema = Yup.object().shape({
    mark: Yup.string().required("G??st??rilm??lidir!"),
    model: Yup.string().required("G??st??rilm??lidir!"),
    body: Yup.string().required("G??st??rilm??lidir!"),
    kmsDriven: Yup.string().required("G??st??rilm??lidir!"),
    color: Yup.string().required("G??st??rilm??lidir!"),
    cost: Yup.string().required("G??st??rilm??lidir!"),
    currency: Yup.string().required("G??st??rilm??lidir!"),
    fuel: Yup.string().required("G??st??rilm??lidir!"),
    driveType: Yup.string().required("G??st??rilm??lidir!"),
    transmission: Yup.string().required("G??st??rilm??lidir!"),
    release: Yup.string().required("G??st??rilm??lidir!"),
    engineCapacity: Yup.string().required("G??st??rilm??lidir!"),
    enginePower: Yup.string().required("G??st??rilm??lidir!"),
    front: Yup.mixed().required("??n ????kil m??tl??q ??lav?? olunmal??d??r"),
    salon: Yup.mixed().required("Salon ????kli m??tl??q ??lav?? olunmal??d??r"),
    back: Yup.mixed().required("Arxa shekil ????kil m??tl??q ??lav?? olunmal??d??r"),
  });
  const onSubmit = (values) => {
  
    const newCarForm = new FormData();
    for (const [key, value] of Object.entries(values)) {
      newCarForm.append(key, value);
    }
    files.items.forEach((image) => {
      newCarForm.append("other", image);
    });

    /** @ FormData logger */
    for (let property of newCarForm.entries()) {
      console.log(property[0], property[1]);
    }
    dispatch(addCarAC(newCarForm));

  };
 
  
  return (
    <>
      <Formik
        initialValues={{ ...initialValues }}
        onSubmit={onSubmit}
        validationSchema={SignupSchema}
      >
        {(formik, field, values, errors) => (
          <div className="new-car">
            <h1>Elan</h1>
            <Form onSubmit={formik.handleSubmit}>
              <div
                className="add-car-wrapper"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <ScrollToFieldError />
                <div className="left-side">
                  <label className="label-control">
                    <div className="string">Marka</div>
                    <FormControl
                      control="select"
                      items={marks}
                      className={"select required"}
                      name="mark"
                    />
                    <ErrorMessage component={TextError} name="mark" />
                  </label>

                  <label className="label-control">
                    <div className="string">Model</div>
                    <FormControl
                      control="select"
                      field={field}
                      items={models}
                      className={"select required"}
                      name="model"
                    />
                    <ErrorMessage component={TextError} name="model" />
                  </label>

                  <label className="label-control">
                    <div className="string">Ban N??v??</div>
                    <FormControl
                      control="select"
                      items={body}
                      className={"select required"}
                      name="body"
                    />
                    <ErrorMessage component={TextError} name="body" />
                  </label>
                  <div>
                    <div className="string">Y??r????</div>
                    <FormControl control="input" name="kmsDriven" />;
                    <ErrorMessage component={TextError} name="kmsDriven" />
                    <FormControl control="radio" name={"lengthUnit"} value="km">
                      km
                    </FormControl>
                    <FormControl control="radio" name={"lengthUnit"} value="ml">
                      ml
                    </FormControl>
                  </div>

                  <label className="label-control">
                    <div className="string">R??ng</div>
                    <FormControl
                      control="select"
                      items={color}
                      className={"select required"}
                      name="color"
                    />
                    <ErrorMessage component={TextError} name="color" />
                  </label>

                  <div>
                    <div className="string">Qiym??t</div>

                    <FormControl control="input" name="cost" />

                    <ErrorMessage component={TextError} name="cost" />

                    <FormControl control="radio" name="currency" value="azn">
                      AZN
                    </FormControl>
                    <FormControl control="radio" name="currency" value="usd">
                      USD
                    </FormControl>
                    <FormControl control="radio" name="currency" value="eur">
                      EUR
                    </FormControl>
                  </div>
                </div>

                <div className="right-side">
                  <label className="label-control">
                    <div className="string">Yanacaq n??v??</div>
                    <FormControl
                      control="select"
                      items={fuel}
                      className="select required"
                      name="fuel"
                    />
                    <ErrorMessage component={TextError} name="fuel" />
                  </label>
                  <label className="label-control">
                    <div className="string">??t??r??c??</div>
                    <FormControl
                      control="select"
                      items={driveType}
                      className="select required"
                      name="driveType"
                    />
                    <ErrorMessage component={TextError} name="driveType" />
                  </label>
                  <label className="label-control">
                    <div className="string">S??r??tl??r qutusu</div>
                    <FormControl
                      control="select"
                      items={transmission}
                      className={"select required"}
                      name="transmission"
                    />
                    <ErrorMessage component={TextError} name="transmission" />
                  </label>
                  <label className="label-control">
                    <div className="string">Burax??l???? ili</div>
                    <FormControl
                      control="select"
                      items={releaseYear}
                      className={"select required"}
                      name="release"
                    />
                    <ErrorMessage component={TextError} name="release" />
                  </label>
                  <label className="label-control">
                    <div className="string">M??h??rrikin h??cmi, sm3</div>
                    <FormControl
                      control="select"
                      items={engineCapacity}
                      className={"select required"}
                      name="engineCapacity"
                    />
                    <ErrorMessage component={TextError} name="engineCapacity" />
                  </label>
                  <label className="label-control">
                    <div className="string">M??h??rrikin g??c??, a.g.</div>

                    <FormControl
                      control="input"
                      type="text"
                      name="enginePower"
                    />

                    <ErrorMessage component={TextError} name="enginePower" />
                  </label>
                </div>
              </div>
              <div className="car-loan">
                <FormControl control="checkbox" name="credit">
                  Kreditd??dir
                </FormControl>
                <FormControl control="checkbox" name="barter">
                  Barter m??mk??nd??r
                </FormControl>
              </div>

              <div className="addInfo">
                <h2 className="string">??lav?? m??lumat</h2>
                <FormControl control="textarea" name="additionalInformation" />
                <div>telefon n??mr??l??rin qeyd etm??k qada??and??r</div>
              </div>

              {/* good */}
              <Container>
                <Row>
                  {carFeatures.map((value, index) => (
                    <Col xl={3} key={value.name}>
                      <FormControl
                        control="checkbox"
                        name={"carFeatures"}
                        value={value.name}
                      >
                        {value.name}
                      </FormControl>
                    </Col>
                  ))}
                </Row>
              </Container>

              <>
                <h1 style={{ marginTop: "20px" }}>Sekiller</h1>
                <div className="car-image">
                  <ul className="car-image-list">
                    <li>
                      Minimum ??? 3 ????kil (??n, arxa v?? b??t??v ??n panelin g??r??nt??s??
                      m??tl??qdir).
                    </li>
                    <li>Maksimum ??? 21 ????kil</li>
                    <li>Optimal ??l???? ??? 1024x768 piksel.</li>
                  </ul>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginTop: "20px",
                    }}
                  >
                    <SingleImageUpload
                      backImage={image}
                      name="front"
                      onHandleChange={(e) =>
                        formik.setFieldValue("front", e.target.files[0])
                      }
                      file={formik.values.front}
                    />
                    {/* <ErrorMessage component={TextError} name="front" /> */}

                    <SingleImageUpload
                      backImage={image}
                      name="back"
                      onHandleChange={(e) =>
                        formik.setFieldValue("back", e.target.files[0])
                      }
                      file={formik.values.back}
                    />
                    <SingleImageUpload
                      backImage={image}
                      name="salon"
                      onHandleChange={(e) =>
                        formik.setFieldValue("salon", e.target.files[0])
                      }
                      file={formik.values.salon}
                    />
                    <MultiplyImageUpload
                      backImage={image}
                      onHandleChange={(e) => {
                        setFiles((files) => {
                          return {
                            ...files,
                            item: e.target.files[0],
                            items: [...files.items, e.target.files[0]],
                          };
                        });
                      }}
                      file={files.item}
                    />
                  </div>
                  <div className="contact-name">
                    <h2 className="string">??laq??</h2>
                    <h3 className="label-control">Ad??n??z</h3>

                    <FormControl control="input" type="text" name="firstName" />

                    <h1 className="label-control">????h??r </h1>
                    <FormControl
                      control="select"
                      name="country"
                      className={"select required"}
                      items={country}
                    />
                  </div>
                </div>
              </>
             
              <div className="submit">
                {isLoading ? (
                  <Spinner />
                ) : (
                  <button type="submit" className="btn-submit">
                    Add an offer
                  </button>
                )}
              </div>
            </Form>
            <button onClick={()=>toast.success('your car is succesfuly added .Go to the Profile page to see your offer')}>toast</button>
          </div>
        )}
      </Formik>
    </>
  );
};

export default NewCar;
