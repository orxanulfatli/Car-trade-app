import React from "react";
import "./NewCar.css";
import { useState } from "react";
import * as Yup from "yup";
import FormControl from "../../components/FormControl/FormControl";
import TextError from "./../../components/TextError/TextError";
import { Formik, ErrorMessage, Field } from "formik";
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
    mark: Yup.string().required("Göstərilməlidir!"),
    model: Yup.string().required("Göstərilməlidir!"),
    body: Yup.string().required("Göstərilməlidir!"),
    kmsDriven: Yup.string().required("Göstərilməlidir!"),
    color: Yup.string().required("Göstərilməlidir!"),
    cost: Yup.string().required("Göstərilməlidir!"),
    currency: Yup.string().required("Göstərilməlidir!"),
    fuel: Yup.string().required("Göstərilməlidir!"),
    driveType: Yup.string().required("Göstərilməlidir!"),
    transmission: Yup.string().required("Göstərilməlidir!"),
    release: Yup.string().required("Göstərilməlidir!"),
    engineCapacity: Yup.string().required("Göstərilməlidir!"),
    enginePower: Yup.string().required("Göstərilməlidir!"),
    front: Yup.mixed().required("Ön şəkil mütləq əlavə olunmalıdır"),
    salon: Yup.mixed().required("Salon şəkli mütləq əlavə olunmalıdır"),
    back: Yup.mixed().required("Arxa shekil şəkil mütləq əlavə olunmalıdır"),
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
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={onSubmit}
      // validationSchema={SignupSchema}
    >
      {(formik, field) => (
        <div className="new-car">
          <h1>Elan</h1>
          <form onSubmit={formik.handleSubmit}>
            <div
              className="add-car-wrapper"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
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
                  <div className="string">Ban Növü</div>
                  <FormControl
                    control="select"
                    items={body}
                    className={"select required"}
                    name="body"
                  />
                  <ErrorMessage component={TextError} name="body" />
                </label>
                <div>
                  <div className="string">Yürüş</div>
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
                  <div className="string">Rəng</div>
                  <FormControl
                    control="select"
                    items={color}
                    className={"select required"}
                    name="color"
                  />
                  <ErrorMessage component={TextError} name="color" />
                </label>

                <div>
                  <div className="string">Qiymət</div>

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
                  <div className="string">Yanacaq növü</div>
                  <FormControl
                    control="select"
                    items={fuel}
                    className="select required"
                    name="fuel"
                  />
                  <ErrorMessage component={TextError} name="fuel" />
                </label>
                <label className="label-control">
                  <div className="string">Ötürücü</div>
                  <FormControl
                    control="select"
                    items={driveType}
                    className="select required"
                    name="driveType"
                  />
                  <ErrorMessage component={TextError} name="driveType" />
                </label>
                <label className="label-control">
                  <div className="string">Sürətlər qutusu</div>
                  <FormControl
                    control="select"
                    items={transmission}
                    className={"select required"}
                    name="transmission"
                  />
                  <ErrorMessage component={TextError} name="transmission" />
                </label>
                <label className="label-control">
                  <div className="string">Buraxılış ili</div>
                  <FormControl
                    control="select"
                    items={releaseYear}
                    className={"select required"}
                    name="release"
                  />
                  <ErrorMessage component={TextError} name="release" />
                </label>
                <label className="label-control">
                  <div className="string">Mühərrikin həcmi, sm3</div>
                  <FormControl
                    control="select"
                    items={engineCapacity}
                    className={"select required"}
                    name="engineCapacity"
                  />
                  <ErrorMessage component={TextError} name="engineCapacity" />
                </label>
                <label className="label-control">
                  <div className="string">Mühərrikin gücü, a.g.</div>

                  <FormControl control="input" type="text" name="enginePower" />

                  <ErrorMessage component={TextError} name="enginePower" />
                </label>
              </div>
            </div>
            <div className="car-loan">
              <FormControl control="checkbox" name="credit">
                Kreditdədir
              </FormControl>
              <FormControl control="checkbox" name="barter">
                Barter mümkündür
              </FormControl>
            </div>

            <div className="addInfo">
              <h2 className="string">Əlavə məlumat</h2>
              <FormControl control="textarea" name="additionalInformation" />
              <div>telefon nömrələrin qeyd etmək qadağandır</div>
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
                    Minimum – 3 şəkil (ön, arxa və bütöv ön panelin görüntüsü
                    mütləqdir).
                  </li>
                  <li>Maksimum – 21 şəkil</li>
                  <li>Optimal ölçü – 1024x768 piksel.</li>
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
                    onHandleChange={(e) =>
                      formik.setFieldValue("front", e.target.files[0])
                    }
                    file={formik.values.front}
                  />
                  {/* <ErrorMessage component={TextError} name="front" /> */}

                  <SingleImageUpload
                    backImage={image}
                    name="image.back"
                    onHandleChange={(e) =>
                      formik.setFieldValue("back", e.target.files[0])
                    }
                    file={formik.values.back}
                  />
                  <SingleImageUpload
                    backImage={image}
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
                  <h2 className="string">Əlaqə</h2>
                  <h3 className="label-control">Adınız</h3>
                
                      <FormControl
                        control="input"
                        type="text"
                        name="firstName"
                      />
                 

                  <h1 className="label-control">Şəhər </h1>
                  <FormControl
                    control="select"
                    name="country"
                    className={"select required"}
                    items={country}
                  />
                </div>
              </div>
            </>
            <button type="submit">submit</button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default NewCar;
