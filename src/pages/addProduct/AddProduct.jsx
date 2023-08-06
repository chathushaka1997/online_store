import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useImageUpload from "../../customHooks/useImageUpload";
import Select from "react-select";
import { Link, useParams } from "react-router-dom";
import useCategory from "../../customHooks/useCategory";
import useBrands from "../../customHooks/useBrands";
import { ProductService } from "../../services/ProductServices";
import { toast } from "react-toastify";
import useTags from "../../customHooks/useTags";
import useProducts from "../../customHooks/useProducts";

const AddProduct = ({ componentName, isEdit = false }) => {
  const { fetchAllCategories } = useCategory();
  const { id } = useParams();
  const { createNewProduct, getProductById, error, handleEditProduct } = useProducts();
  const { brands } = useBrands();
  const { fetchAllTags } = useTags();
  const [formValues, setFormValues] = useState(null);

  const [handleUpload, imgUploadError, isImageUploading] = useImageUpload();
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (id) {
      const selectedProduct = getProductById(id);
      if (selectedProduct) {
        setFormValues({
          ...selectedProduct,
          brand: selectedProduct?.brand?._id,
          category: selectedProduct?.category?._id,
          tags: selectedProduct?.tags?.map((tag) => tag._id),
        });
      }
    }
  }, [id, brands]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await fetchAllCategories();
      const optionsList = categories.map((category) => ({ label: category.name, value: category._id }));
      setCategories(optionsList);
    };
    const fetchTags = async () => {
      const tags = await fetchAllTags();
      const optionsList = tags.map((brand) => ({ label: brand.name, value: brand._id }));
      setTags(optionsList);
    };
    fetchCategories();
    fetchTags();
  }, []);

  const converToOptionList = (Array) => {
    return Array?.map((item) => ({ label: item.name, value: item._id }));
  };

  const initialValues = {
    title: "",
    price: "",
    category: "",
    brand: "",
    description: "",
    images: undefined,
    tags: undefined,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
    tags: Yup.array().of(Yup.string()).min(1, "At least one tag is required").required("At least one tag is required"),
    brand: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    images: Yup.object().required("Required"),
  });

  const onSubmit = async (values, onSubmitProps) => {
    console.log(values);

    if (isEdit) {
      handleEditProduct(values);
    } else {
      await createNewProduct(values);
      onSubmitProps.resetForm();
    }
  };

  const onImageChange = async (event, formik) => {
    const imageData = await handleUpload(event.target.files[0]);
    formik.setFieldValue("images", imageData);
  };

  const onMultiSelectChange = (selectedOptions) => {
    return selectedOptions.map((option) => option.value);
  };

  const getTagOptionById = (ids, tags) => {
    const tagList = tags.filter((tag) => ids?.includes(tag?._id));
    console.log(tagList);
    return tagList.map((tag) => ({ value: tag._id, label: tag.name }));
  };

  return (
    <div className="container">
      <h3 className="mb-3 text-primary fw-bolder">{componentName}</h3>
      <div className=" border p-4 ">
        <Formik initialValues={formValues || initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize>
          {(formik) => {
            return (
              <Form>
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <div className="form-group mb-2">
                  <label htmlFor="title" className="fw-bold">
                    Title
                  </label>
                  <Field type="text" id="title" name="title" className="form-control" />
                  <ErrorMessage name="title">{(errorMsg) => <div className="text-danger">{errorMsg}</div>}</ErrorMessage>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col">
                    <label htmlFor="price" className="fw-bold">
                      Price
                    </label>
                    <Field type="number" id="price" name="price" className="form-control" />
                    <ErrorMessage name="price">{(errorMsg) => <div className="text-danger">{errorMsg}</div>}</ErrorMessage>
                  </div>
                  <div className="form-group mb-2 col">
                    <label htmlFor="category" className="fw-bold">
                      Tags
                    </label>
                    <Select
                      options={tags}
                      onChange={(selectedOptions) => {
                        formik.setFieldValue("tags", onMultiSelectChange(selectedOptions));
                      }}
                      isMulti // Enable multi-select
                      placeholder="Select Tags"
                      value={() => {
                        const data = getTagOptionById(formik.values.tags, tags);
                        console.log(data);
                        return data;
                      }}
                    />
                    <ErrorMessage name="tags">{(errorMsg) => <div className="text-danger">{errorMsg}</div>}</ErrorMessage>
                  </div>
                </div>

                <div className="row">
                  <div className="form-group mb-2 col">
                    <label htmlFor="category" className="fw-bold">
                      Category
                    </label>
                    <Field as="select" id="category" name="category" className="form-control">
                      <option className="text-secondary" value={""}>
                        Select Category
                      </option>
                      {categories.map((brand) => (
                        <option key={brand.value} value={brand.value}>
                          {brand.label}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name="category">{(errorMsg) => <div className="text-danger">{errorMsg}</div>}</ErrorMessage>
                  </div>

                  <div className="form-group mb-2 col">
                    <label htmlFor="brand" className="fw-bold">
                      Brand
                    </label>
                    <Field as="select" id="brand" name="brand" className="form-control">
                      <option className="text-secondary" value={""}>
                        Select Brand
                      </option>
                      {converToOptionList(brands).map((brand) => (
                        <option key={brand.value} value={brand.value}>
                          {brand.label}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name="brand">{(errorMsg) => <div className="text-danger">{errorMsg}</div>}</ErrorMessage>
                  </div>
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="description" className="fw-bold">
                    Description
                  </label>
                  <Field type="text" as="textarea" id="description" name="description" className="form-control" />
                  <ErrorMessage name="description">{(errorMsg) => <div className="text-danger">{errorMsg}</div>}</ErrorMessage>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="images" className="fw-bold">
                    Image
                  </label>

                  <input type="file" id="images" name="images" className="form-control" onChange={(event) => onImageChange(event, formik)} />
                  <ErrorMessage name="images">{(errorMsg) => <div className="text-danger">{errorMsg}</div>}</ErrorMessage>
                  {isImageUploading && (
                    <div className="text-primary">
                      <div className="spinner-border spinner-border-sm " role="status">
                        <span className="sr-only"></span>
                      </div>
                      <span> Uploading...</span>
                    </div>
                  )}
                  {imgUploadError && <div className="text-danger">{imgUploadError}</div>}
                  {formik.values.images && (
                    <img
                      className="m-1"
                      style={{ maxWidth: "800px" }}
                      src={formik.values.images?.displayUrl || formik.values.images?.tumbnailUrl}
                      alt={formik.values.images?.originalUrl}
                    />
                  )}
                </div>

                <div className="d-flex justify-content-end">
                  <button type="reset" className="btn btn-outline-secondary px-3 me-3">
                    Reset
                  </button>
                  <button type="submit" className="btn btn-primary px-5">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      console.log(getTagOptionById(formik.values.tags, tags));
                      console.log(formik.values);
                    }}
                  >
                    View status
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <Link className="me-4" to={"/add-category"}>
        Add Category
      </Link>
      <Link className="me-4" to={"/add-brand"}>
        Add Brand
      </Link>
      <Link className="me-4" to={"/add-tag"}>
        Add Tag
      </Link>
    </div>
  );
};

export default AddProduct;
