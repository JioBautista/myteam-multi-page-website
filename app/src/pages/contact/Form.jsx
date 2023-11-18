import React from "react";
import styles from "../../styles/contact.module.scss";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(JSON.stringify(data));
  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          {...register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"}
        ></input>

        {errors.name?.type === "required" && (
          <span role="alert">This field is required</span>
        )}

        <input
          placeholder="Email Address"
          {...register("email", { required: true })}
        ></input>

        {errors.email?.type === "required" && (
          <span role="alert">This field is required</span>
        )}

        <input
          placeholder="Company Name"
          {...register("companyName", { required: true })}
        ></input>

        {errors.companyName?.type === "required" && (
          <span role="alert">This field is required</span>
        )}
        <input
          placeholder="Title"
          {...register("title", { required: true })}
        ></input>

        {errors.title?.type === "required" && (
          <span role="alert">This field is required</span>
        )}
        <textarea
          placeholder="Message"
          {...register("message")}
        ></textarea>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Form;
