import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <form name="Contact Us" method="post" novalidate="">
        <div class="paragraphSystem">
          <div
            class="fieldSet component section default-style"
            data-position="30"
          >
            <fieldset class="form-field-set">
              <div class="paragraphSystem fields">
                <div
                  class="selectField component form-element section default-style even last enqType"
                  data-position="36"
                >
                  <div
                    class="component-content error"
                    data-required-error-message="Please select the Type of Inquiry"
                  >
                    <div class="control-group">
                      <label class="control-label" for="inquiryType">
                        {" "}
                        Please select the Type of Inquiry{" "}
                        <span class="required">*</span>{" "}
                      </label>
                      <div class="controls">
                        <select
                          name="inquiryType"
                          id="inquiryType"
                          required=""
                          onchange="onEnquiryTypeSelect()"
                        >
                          <option value="" selected>
                            Choose an option
                          </option>
                          <option value="Question">I have a question</option>
                          <option value="Concern">I have a concern</option>
                        </select>
                      </div>
                    </div>
                    <span class="error-msg">
                      Please select the Type of Inquiry
                    </span>
                  </div>
                </div>
                <div
                  class="selectField component form-element section default-style even last enqSubj"
                  data-position="36"
                >
                  <div
                    class="component-content error"
                    data-required-error-message="Please select the Type of Inquiry"
                  >
                    <div class="control-group">
                      <label class="control-label" for="inquiryType">
                        {" "}
                        Please give us some more details
                        <span class="required">*</span>{" "}
                      </label>
                      <div class="controls">
                        <select
                          name="inquiryType"
                          id="inquirySubject"
                          required=""
                          onchange="onEnquirySubjSelect()"
                        >
                          <option value="" selected>
                            Choose an option
                          </option>
                          <option value="Product">It's about a product</option>
                          <option value="Business">
                            It's about the Unilever business or a brand
                          </option>
                          <option value="Personal data">
                            It's about my personal data that you may hold
                          </option>
                        </select>
                      </div>
                    </div>
                    <span class="error-msg">
                      Please tell us the reason for your enquiry:
                    </span>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div
            class="fieldSet component section default-style usrDetails"
            data-position="30"
          >
            <fieldset class="form-field-set">
              <div
                class="selectField component form-element section default-style even last"
                data-position="36"
              >
                <div class="component-content">
                  <legend class="control-label subHeadings">
                    {" "}
                    YOUR DETAILS
                  </legend>
                </div>
              </div>
              <div
                class="textField component form-element section default-style odd"
                data-position="33"
              >
                <div
                  class="component-content error"
                  data-required-error-message="Please enter your First Name"
                  data-invalid-value-error-message="Please use letters or punctuation only for First Name"
                >
                  <div class="control-group">
                    <label class="control-label" for="givenName">
                      {" "}
                      First Name / Initials <span class="required">*</span>{" "}
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        title="First Name"
                        name="givenName"
                        id="givenName"
                        value=""
                        placeholder="First Name / Initials"
                        required=""
                        pattern="^[a-zA-ZÀ-ž\-'()\.]{1}[\sa-zA-ZÀ-ž\-'()\.]{1,}$"
                      />
                    </div>
                  </div>
                  <span class="error-msg">Please enter your First Name</span>
                </div>
              </div>
              <div
                class="textField component form-element section default-style even"
                data-position="34"
              >
                <div
                  class="component-content error"
                  data-required-error-message="Please enter your Last Name"
                  data-invalid-value-error-message="Please use letters or punctuation only for Last Name"
                >
                  <div class="control-group">
                    <label class="control-label" for="familyName">
                      {" "}
                      Last Name <span class="required">*</span>{" "}
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        title="Last Name"
                        name="familyName"
                        id="familyName"
                        value=""
                        placeholder="Last Name"
                        required=""
                        pattern="^[a-zA-ZÀ-ž\-'()\.]{1}[\sa-zA-ZÀ-ž\-'()\.]{1,}$"
                      />
                    </div>
                  </div>
                  <span class="error-msg">Please enter your Last Name</span>
                </div>
              </div>
              <div
                class="textField component form-element section default-style odd"
                data-position="35"
              >
                <div
                  class="component-content error"
                  data-required-error-message="Please enter a valid E-mail Address"
                  data-invalid-value-error-message="Please enter a valid E-mail Address"
                >
                  <div class="control-group">
                    <label class="control-label" for="email">
                      {" "}
                      E-mail address <span class="required">*</span>{" "}
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        title="Your e-mail"
                        name="email"
                        id="email"
                        value=""
                        placeholder="E-mail address"
                        required=""
                        pattern="^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)*(\.[a-zA-Z]{2,})$"
                      />
                    </div>
                  </div>
                  <span class="error-msg">
                    Please enter a valid E-mail Address
                  </span>
                </div>
              </div>
            </fieldset>
          </div>
          <div
            class="fieldSet component section default-style prdctDetails"
            data-position="30"
          >
            <fieldset class="form-field-set">
              <div
                class="selectField component form-element section default-style even last"
                data-position="36"
              >
                <div class="component-content">
                  <legend class="control-label subHeadings">
                    {" "}
                    PRODUCT DETAILS
                  </legend>
                </div>
              </div>
              <div
                class="textField component form-element section default-style odd"
                data-position="35"
              >
                <div
                  class="component-content error"
                  data-required-error-message="Please enter product name"
                  data-invalid-value-error-message="Please enter product name"
                >
                  <div class="control-group">
                    <label class="control-label" for="productName">
                      {" "}
                      Product Name <span class="required">*</span>{" "}
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        title="Product Name"
                        name="productName"
                        id="productName"
                        value=""
                        placeholder="product name"
                        required=""
                        pattern="^[a-zA-ZÀ-ž\-'()\.]{1}[\sa-zA-ZÀ-ž\-'()\.]{1,}$"
                      />
                    </div>
                  </div>
                  <span class="error-msg">Please enter product name</span>
                </div>
              </div>
              <div
                class="textField component form-element section default-style odd"
                data-position="35"
              >
                <div
                  class="component-content error"
                  data-required-error-message="Please enter Bar Code"
                  data-invalid-value-error-message="Please enter Bar Code"
                >
                  <div class="control-group">
                    <label class="control-label" for="barCode">
                      {" "}
                      Barcode{" "}
                      <div class="circle tooltip">
                        ? <span class="tooltiptext">Bar-code</span>
                      </div>
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        title="Bar Code"
                        name="barCode"
                        id="barCode"
                        value=""
                        placeholder="Barcode"
                        required=""
                        pattern="^[a-zA-ZÀ-ž\-'()\.]{1}[\sa-zA-ZÀ-ž\-'()\.]{1,}$"
                      />
                    </div>
                  </div>
                  <span class="error-msg">Please enter Bar Code</span>
                </div>
              </div>
              <div
                class="textField component form-element section default-style odd"
                data-position="35"
              >
                <div
                  class="component-content error"
                  data-required-error-message="Please enter Production code"
                  data-invalid-value-error-message="Please enter Production code"
                >
                  <div class="control-group">
                    <label class="control-label" for="productionCode">
                      {" "}
                      Production code{" "}
                      <div class="circle tooltip">
                        ? <p class="tooltiptext">Production-code</p>
                      </div>{" "}
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        title="Production code"
                        name="productionCode"
                        id="productionCode"
                        value=""
                        placeholder="Production Code"
                        required=""
                        pattern="^[a-zA-ZÀ-ž\-'()\.]{1}[\sa-zA-ZÀ-ž\-'()\.]{1,}$"
                      />
                    </div>
                  </div>
                  <span class="error-msg">Please enter Production code</span>
                </div>
              </div>
              <div
                class="textField component form-element section default-style odd"
                data-position="35"
              >
                <div class="component-content error">
                  <div class="control-group">
                    <label class="control-label">
                      {" "}
                      Pictures / Attachments{" "}
                    </label>
                    <div
                      class="formButton component form-element section default-style even last"
                      data-position="42"
                    >
                      <div class="component-content browseButton">
                        <button type="button" name="browse" class="button">
                          {" "}
                          Browse{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="selectField component form-element section default-style even last"
                data-position="36"
              >
                <div
                  class="component-content error"
                  data-required-error-message="Please select"
                >
                  <div class="control-group">
                    <label class="control-label" for="productUse">
                      {" "}
                      How often do you use the product?
                    </label>
                    <div class="controls">
                      <select name="productUse" id="productUse" required="">
                        <option value="" selected="">
                          Select
                        </option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                      </select>
                    </div>
                  </div>
                  <span class="error-msg">Please select </span>
                </div>
              </div>
              <div
                class="selectField component form-element section default-style even last"
                data-position="36"
              >
                <div
                  class="component-content error"
                  data-required-error-message="Please select"
                >
                  <div class="control-group">
                    <label class="control-label" for="whereBuy">
                      {" "}
                      Where do you usually buy this product?{" "}
                    </label>
                    <div class="controls">
                      <select name="whereBuy" id="whereBuy" required="">
                        <option value="" selected="">
                          Select
                        </option>
                        <option value="Retailer">Retailer</option>
                        <option value="Online">Online</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <span class="error-msg">Please select </span>
                </div>
              </div>
              <div
                class="textField component form-element section default-style odd"
                data-position="35"
              >
                <div
                  class="component-content error"
                  data-required-error-message="Please enter Name of Retailer"
                  data-invalid-value-error-message="Please enter Name of Retailer"
                >
                  <div class="control-group">
                    <label class="control-label" for="retailerName">
                      {" "}
                      Name of Retailer <span class="required">*</span>{" "}
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        title="Name of Retailer"
                        name="retailerName"
                        id="retailerName"
                        value=""
                        placeholder="Name of Retailer"
                        required=""
                        pattern="^[a-zA-ZÀ-ž\-'()\.]{1}[\sa-zA-ZÀ-ž\-'()\.]{1,}$"
                      />
                    </div>
                  </div>
                  <span class="error-msg">Please enter Name of Retailer</span>
                </div>
              </div>

              <div class="paragraphSystem content">
                <div
                  class="textArea component form-element section textarea email-us-form-comments"
                  data-position="34"
                >
                  <div
                    class="component-content"
                    data-required-error-message="Please enter your question/comments here "
                  >
                    <div class="control-group">
                      <label class="control-label comments" for="comments">
                        {" "}
                        Please give us some more information to help us respond{" "}
                        <span class="required">*</span>{" "}
                      </label>
                      <div class="controls">
                        <textarea
                          cols="68"
                          maxlength="300"
                          name="comments"
                          id="comments"
                          placeholder="Message"
                          required=""
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div
            class="fieldSet component section default-style privacyPolicy"
            data-position="30"
          >
            <fieldset class="form-field-set">
              <div
                class="selectField component form-element section default-style even last"
                data-position="36"
              >
                <div class="component-content">
                  <legend class="control-label subHeadings">
                    {" "}
                    PRIVACY POLICY, COOKIES AND OPT-INS
                  </legend>
                </div>
              </div>
              <div
                class="richText component section default-styles-inherit form-legal-info even initialized"
                data-position="39"
              >
                <div class="component-content">
                  <div class="richText-content">
                    <p>
                      Unilever is committed to protecting your privacy and
                      ensuring that your personal information is protected. For
                      more information, please visit our&nbsp;
                      <a
                        href="http://www.unilevernotices.com/united-kingdom/english/privacy-notice/notice.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Privacy Policy - opens in a new tab"
                      >
                        Privacy Policy
                      </a>
                      ,&nbsp;
                      <a
                        href="https://www.unilever.co.uk/legal.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Terms of Use - opens in a new tab"
                      >
                        Terms of Use
                      </a>
                      &nbsp;and&nbsp;
                      <a
                        href="http://www.unilevercookiepolicy.com/en_GB/accept-policy.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Cookie Policy - opens in a new tab"
                      >
                        Cookie Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="parametrizedhtml component section default-style odd reference-checkbox-item initialized"
                data-position="59"
              >
                <div class="component-content">
                  <div
                    class="checkboxGroup component form-element section   has-name-item "
                    data-position="60"
                  >
                    <div
                      class="component-content"
                      data-required-error-message="Field is mandatory"
                    >
                      <div class="control-group">
                        <div class="controls">
                          <label
                            class="checkbox"
                            for="checkbox-legalAgeConfirmation"
                          >
                            {" "}
                            <input
                              id="checkbox-legalAgeConfirmation"
                              role="checkbox"
                              type="checkbox"
                              name="legalAgeConfirmation"
                              value="yes"
                              required=""
                            />{" "}
                            <span class="checkbox-label-text">
                              {" "}
                              I confirm that I am over 16 years old
                            </span>{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="parametrizedhtml component section default-style odd reference-checkbox-item initialized"
                data-position="59"
              >
                <div class="component-content">
                  <div
                    class="checkboxGroup component form-element section   has-name-item "
                    data-position="60"
                  >
                    <div
                      class="component-content"
                      data-required-error-message="Field is mandatory"
                    >
                      <div class="control-group">
                        <div class="controls">
                          <label
                            class="checkbox"
                            for="checkbox-legalAgeConfirmation"
                          >
                            {" "}
                            <input
                              id="checkbox-legalAgeConfirmation"
                              role="checkbox"
                              type="checkbox"
                              name="legalAgeConfirmation"
                              value="yes"
                              required=""
                            />{" "}
                            <span class="checkbox-label-text">
                              I would like to receive the notificatio
                            </span>{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div
            class="formButton component form-element section default-style even last submitBtn"
            data-position="42"
          >
            <div class="component-content">
              <button type="submit" name="submit" class="button">
                {" "}
                Submit{" "}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
