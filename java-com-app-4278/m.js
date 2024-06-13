$(document).ready(() => {
  var isError = false;
  // sign up
  var color = null;

  $("#btnUpdateTrack").click(function (e) {
    // e.preventDefault(); // Prevent the default action, if the button is inside a form

    // Serialize the form data
    var formData = $("#orderTrackForm").serialize() + "&request_=update_track";

    $.ajax({
      type: "POST",
      url: BASE_URL + "api/admin",
      data: formData,
      // dataType: "json",
      success: function (response) {
        console.log("success re", response);
        // showToast(response.message, response.color);
        $(".btn-close").click();
        // window.location.reload();

        // Additional code for handling the response (e.g., showing a message to the user)
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error("Error:", textStatus, errorThrown);

        // Additional code for handling the error (e.g., showing an error message to the user)
      },
    });
  });

  function handleViewDetailsClick() {
    var currentText = $(this).text().trim();
    var orderID = $(this).attr("id").replace("btn_toggle", "");

    $(".order_info").hide(500);
    $(".btnViewDetailsAdm").text("View Details");

    if (currentText === "View Details") {
      $(this).text("Hide Details");
      $("#order_info" + orderID).show(500);
    } else {
      $(this).text("View Details");
    }

    localStorage.setItem("clickedOrderId", $(this).attr("id"));
  }

  var clickedOrderId = localStorage.getItem("clickedOrderId");
  if (clickedOrderId) {
    setTimeout(() => {
      $("#" + clickedOrderId).click();
    }, 1);
  } else {
    $(".order_info").hide();
  }

  $(".btnViewDetailsAdm").unbind("click").click(handleViewDetailsClick);

  $(".openOrderTrackModal").click(function () {
    const orderId = $(this).data("order-id");
    $("#orderId").val(orderId);

    $("#orderTrackModal").modal("show");
  });

  $(".askDeleteProduct").click(function () {
    var id = $(this).prop("alt").substring(4);
    $("#deleteProductName").text(
      $("#aprove_product_name" + id)
        .text()
        .trim()
    );
    // alert("Hii "+id)
    $("#deleteProductId").val(id);
  });

  $("#btnDeleteProduct").click(function () {
    // send ajax to delete the product

    $.ajax({
      url: BASE_URL + "/api/admin",
      type: "POST",
      data: {
        id: $("#deleteProductId").val(),
        product_name: $("#deleteProductName").text(),
        request_: "delete_product",
      },
      dataType: "json",
      success: function (response) {
        // Handle the response

        showToast(response.message, response.color);
        console.log(response.message);
        $(".btn-close").click();
        $("#manageProducts").click();

        // window.location.reload();
      },
      error: function (xhr, status, error) {
        console.log("AJAX error:", error);
      },
    });
  });

  $(".askReviewPendingProduct").click(function () {
    var id = $(this).prop("alt").substring(4);
    $("#reviewProductName").text(
      $("#product_name" + id)
        .text()
        .trim()
    );
    // alert("Hii "+id)
    $("#reviewProductId").val(id);
    // productStatus

    var selectedOption = $("#productStatus" + id).text();
    $("#statusSelectProduct")
      .find("option[value='" + selectedOption + "']")
      .attr("selected", "selected");
  });

  $("#statusSelectProduct").change(function () {
    // Get the selected value
    const selectedStatus = $(this).val();

    // Check if the selected value is "rejected"
    if (selectedStatus === "rejected") {
      // If the selected value is "rejected," show the remarkContainer
      $("#remarkContainer2").show();
    } else {
      // If the selected value is anything other than "rejected," hide the remarkContainer
      $("#remarkContainer2").hide();
    }
  });

  $("#btnReviewProduct").click(function () {
    if ($("#statusSelectProduct").val() == "rejected") {
      isError = isNotValid("#reviewProductRemark", "please, provide remark.");

      if (isError) return;
    }

    // send ajax to
    $.ajax({
      url: BASE_URL + "/api/admin",
      type: "POST",
      data: {
        id: $("#reviewProductId").val(),
        status: $("#statusSelectProduct").val(),
        remark: $("#reviewProductRemark").val(),
        request_: "update_product_status",
      },
      dataType: "json",
      success: function (response) {
        // Handle the response

        showToast(response.message);
        console.log(response.message);
        $(".btn-close").click();
        // $("#manageProducts").click();
        // window.location.reload();
      },
      error: function (xhr, status, error) {
        console.log("AJAX error:", error);
      },
    });
  });
  $("#manageProducts").click(function () {
    $.ajax({
      url: BASE_URL + "/api/admin_products",
      type: "GET",
      success: function (response) {
        // Update the content of the #code element with the fetched data
        $("#code").html(response);
      },
      error: function () {
        // Handle any error that occurred during the AJAX request
        alert("An error occurred while fetching the content.");
      },
    });
  });
  // Function to check if all input fields are filled
  function checkFields() {
    var category = $("#newCategory").val();
    var image = $("#categoryImage").val();
    if (category !== "" && image !== "") {
      $(".errorToast").addClass("d-none");
    } else {
      $(".errorToast").removeClass("d-none");
    }
  }

  // Check fields on change
  // $("#newCategory, #categoryImage").change(function () {
  //   checkFields();
  // });

  $("#admAddNewCategory_").click(function () {
    console.log("Add new Cat");
    // Get form data
    var formData = new FormData($("#adminCategoryForm_")[0]);

    // Add additional data to the form data
    formData.append("request_", "add_new_category");

    // Check fields before submitting the form
    checkFields();

    // If any field is empty, prevent form submission
    if (!$(".errorToast").hasClass("d-none")) {
      return false;
    }

    // Send AJAX request
    $.ajax({
      url: BASE_URL + "/api/admin",
      type: "POST",
      data: formData,
      contentType: false,
      processData: false,
      success: function (response) {
        // Handle success response
        console.log("Category", response);
        // Close modal after successful submission
        $("#addNewCategoryModal").modal("hide");
        location.reload();
      },
      error: function (xhr, status, error) {
        // Handle error response
        console.error("Error adding category:", error);
        // Display error toast if needed
        $(".errorToast").removeClass("d-none");
      },
    });
  });

  $("#addSubCategoryImage").change(function () {
    var file = this.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#subCategoryImagePreview").attr("src", e.target.result).show();
    };

    reader.readAsDataURL(file);
  });

  $("#btnReviewSubCategory").click(() => {
    $.ajax({
      url: BASE_URL + "/api/admin",
      type: "POST",
      data: {
        id: $("#reviewSubCategoryId").val(),
        status: $("#statusSelect").val(),
        request_: "update_Subcat_status",
      },
      dataType: "json",
      success: function (response) {
        // Handle the response
        // console.log(response);
        showToast(response.message, response.color);
        $("#manageSubCategories").click();
        // window.location.reload();
      },
      error: function (xhr, status, error) {
        console.log("AJAX error:", error);
      },
    });
  });

  $(".askDeleteStore").click(function () {
    var id = $(this).data("id");
    $("#deleteStoreId").val(id);
    $("#deleteStoreName").text($("#store_name" + id).text());
  });
  $("#btnDeleteStore").click(function () {
    $.ajax({
      url: BASE_URL + "/api/admin", // replace with your server's URL
      type: "POST",
      data: {
        storeId: $("#deleteStoreId").val(),
        request_: "delete_shop_from_pending",
      },
      dataType: "json", // Expect a JSON response
      success: function (response) {
        // Check the status property from the JSON response
        showToast(response.message, response.color);
        $(".btn-close").click();
        setTimeout(() => {
          window.location.reload();
        }, 1800);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        // Handle errors here (e.g., network errors or invalid JSON)
        alert("An error occurred: " + textStatus);
      },
    });
  });
  $(".askUpdateStore").click(function () {
    // code to upload..

    var id = $(this).data("id");
    var status = $(this).data("status");

    $("#categoryStatusSelect").val(status);
    $("#reviewStoreName").text($("#store_name" + id).text());
    $("#reviewStoreId").val(id);
    console.log("kites " + id + "," + status);
  });

  $("#btnreviewStore").click(function () {
    if ($("#categoryStatusSelect").val() == "rejected") {
      isError = isNotValid("#reviewStoreRemark", "please, provide remark.");

      if (isError) return;
    }

    var status = $("#categoryStatusSelect").val();
    var storeId = $("#reviewStoreId").val();
    var remark = $("#reviewStoreRemark").val();

    $.ajax({
      url: BASE_URL + "/api/admin", // replace with your server's URL
      type: "POST",
      data: {
        status: status,
        storeId: storeId,
        remark: remark,
        request_: "update_store",
      },
      dataType: "json", // Expect a JSON response
      success: function (response) {
        console.log(response, "-------asdasdasddas-----", response.qqq);
        // Check the status property from the JSON response
        showToast(response.message, response.color);
        $(".btn-close").click();
        setTimeout(() => {
          // window.location.reload()
        }, 1800);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        // Handle errors here (e.g., network errors or invalid JSON)
        alert("An error occurred: " + textStatus);
      },
    });
  });

  $(".askReviewSubCat").click(function () {
    var id = $(this).prop("id").substring(3);
    $("#reviewSubCategoryName").text(
      $("#subcategory_name" + id)
        .text()
        .trim()
    );
    $("#reviewSubCategoryId").val(id);

    var catData = {
      id: id,
      request_: "update_cat_status",
    };
    $.ajax({
      url: BASE_URL + "/api/admin",
      method: "POST",
      dataType: "json",
      data: catData,
      success: function (response) {
        // Loop through the data and dynamically add <option> elements to the <select>
        $("#statusSelect").empty();
        const option = `<option selected value="${response.verification_status}">${response.verification_status}</option>`;
        $("#statusSelect").append(option);
        $("#statusSelect").append(`<option value="approved">Approved</option>`);
        $("#statusSelect").append(`<option value="pending">pending</option>`);
        $("#statusSelect").append(`<option value="rejected">Rejected</option>`);
      },
      error: function (error) {
        console.error("Error fetching data:", error);
      },
    });
  });

  $("#manageSubCategories").click(function () {
    $.ajax({
      url: BASE_URL + "/api/admin_sub_categories",
      type: "GET",
      success: function (response) {
        // Update the content of the #code element with the fetched data
        $("#code").html(response);
      },
      error: function () {
        // Handle any error that occurred during the AJAX request
        alert("An error occurred while fetching the content.");
      },
    });
  });

  $("#btnAdminDeleteCategory").click(function () {
    // alert($("#deleteCategoryId").val())

    // request api to delete it.
    $.ajax({
      url: BASE_URL + "/api/admin",
      type: "POST",
      data: {
        id: $("#deleteCategoryId").val(),
        request_: "delete_pending_category",
      },
      dataType: "json",
      success: function (response) {
        console.log(response.message);
      },
      error: function (xhr, status, error) {
        console.log("AJAX error:", error);
      },
    });
  });

  $(".askDeletePendingProduct").click(function () {
    // alert("Hii");
    // fetch details..

    var id = $(this).prop("alt").substring(4);
    // console.log(id)

    $("#deletePendingProductName").text(
      $("#product_name" + id)
        .text()
        .trim()
    );
    $("#deletePendingProductId").val(id);
  });

  $("#btnDeletePendingProduct").click(function () {
    $.ajax({
      url: BASE_URL + "/api/admin",
      type: "POST",
      data: {
        id: $("#deletePendingProductId").val(),
        product_name: $("#deletePendingProductName").text(),
        request_: "delete_pending_product",
      },
      dataType: "json",
      success: function (response) {
        // Handle the response

        showToast(response.message, response.color);
        console.log(response.message);
        $(".btn-close").click();
        $("#manageProducts").click();

        // window.location.reload();
      },
      error: function (xhr, status, error) {
        console.log("AJAX error:", error);
      },
    });
  });

  $(".askDeleteCategory").click(function () {
    var id = $(this).prop("alt").substring(4);
    $("#deleteCategoryName").text(
      $("#category_name" + id)
        .text()
        .trim()
    );
    $("#deleteCategoryId").val(id);

    // alert(id)
  });

  $(".askdeleteSubCategory").click(function () {
    var id = $(this).prop("alt").substring(4);

    // alert(id);
    $("#deleteSubCategoryName").text($("#subcategory_name" + id).text());
    $("#deleteSubCategoryId").val(id);
  });

  $("#btnAdmindeleteSubCategory").click(function () {
    // send ajax to delete it

    $.ajax({
      url: BASE_URL + "/api/admin",
      type: "POST",
      data: {
        id: $("#deleteSubCategoryId").val(),
        request_: "delete_pending_subcategory",
      },
      dataType: "json",
      success: function (response) {
        // Handle the response

        showToast(response.message);
        console.log(response.message);
        $(".btn-close").click();
        $("#manageSubCategories").click();
        // window.location.reload();
      },
      error: function (xhr, status, error) {
        console.log("AJAX error:", error);
      },
    });
  });
  $("#btnReviewCategory").click(() => {
    if ($("#categoryStatusSelect").val() == "rejected") {
      isError = isNotValid("#reviewCategoryRemark", "please, provide remark.");

      if (isError) return;
    }
    // return;
    $.ajax({
      url: BASE_URL + "/api/admin",
      type: "POST",
      data: {
        id: $("#reviewCategoryId").val(),
        status: $("#categoryStatusSelect").val(),
        remark: $("#reviewCategoryRemark").val(),
        request_: "update_cat_status",
      },
      dataType: "json",
      success: function (response) {
        // Handle the response

        showToast(response.message);
        console.log(response.message);
        $(".btn-close").click();
        $("#manageCategories").click();
        // window.location.reload();
      },
      error: function (xhr, status, error) {
        console.log("AJAX error:", error);
      },
    });
  });

  $(".askReviewSubCategory").click(function () {
    // load info to Review sub Category
    // alert("Hello World..")

    var id = $(this).prop("alt").substring(4);
    // alert(id)
    $("#reviewSubCategoryName").text($("#subcategory_name" + id).text());
    $("#statusSelectSubCategoryReview").empty();
    $("#reviewSubCategoryId").val(id);

    $("#statusSelectSubCategoryReview").append(
      "<option value='pending'>Pending</option>"
    );
    $("#statusSelectSubCategoryReview").append(
      "<option value='approved'>Approve</option>"
    );
    $("#statusSelectSubCategoryReview").append(
      "<option value='rejected'>Reject</option>"
    );
  });

  $("#statusSelectSubCategoryReview").on("change", function () {
    // Get the selected value
    const selectedStatus = $(this).val();

    // Check if the selected value is "rejected"
    if (selectedStatus === "rejected") {
      // If the selected value is "rejected," show the remarkContainer
      $("#remarkContainer").show();
    } else {
      // If the selected value is anything other than "rejected," hide the remarkContainer
      $("#remarkContainer").hide();
    }
  });
  $("#btnReviewSubCategoryUpdate").click(function () {
    // alert("Hello World..")
    if ($("#statusSelectSubCategoryReview").val() == "rejected") {
      isError = isNotValid(
        "#reviewSubCategoryRemark",
        "please, provide remark."
      );
      if (isError) return;
    }

    $.ajax({
      url: BASE_URL + "/api/admin",
      type: "POST",
      data: {
        id: $("#reviewSubCategoryId").val(),
        status: $("#statusSelectSubCategoryReview").val(),
        remark: $("#reviewSubCategoryRemark").val(),
        request_: "update_subcat_status",
      },
      dataType: "json",
      success: function (response) {
        // Handle the response

        showToast(response.message);
        console.log(response.message);
        $(".btn-close").click();
        $("#manageSubCategories").click();
        // window.location.reload();
      },
      error: function (xhr, status, error) {
        console.log("AJAX error:", error);
      },
    });
  });

  $(".askReviewCategory").click(function () {
    var id = $(this).prop("alt").substring(4);
    // alert(id)
    $("#reviewCategoryName").text(
      $("#category_name" + id)
        .text()
        .trim()
    );
    $("#reviewCategoryId").val(id);

    $("#categoryStatusSelect").empty();
    // enum('pending', 'approved', 'rejected')
    $("#categoryStatusSelect").append(
      "<option value='pending'>Pending</option>"
    );
    $("#categoryStatusSelect").append(
      "<option value='approved'>Approve</option>"
    );
    $("#categoryStatusSelect").append(
      "<option value='rejected'>Reject</option>"
    );
  });

  $("#categoryStatusSelect").on("change", function () {
    // Get the selected value
    const selectedStatus = $(this).val();

    // Check if the selected value is "rejected"
    if (selectedStatus === "rejected") {
      // If the selected value is "rejected," show the remarkContainer
      $("#remarkContainer").show();
    } else {
      // If the selected value is anything other than "rejected," hide the remarkContainer
      $("#remarkContainer").hide();
    }
  });
  $("#status").on("change", function () {
    const selectedStatus = $(this).val();
    if (selectedStatus === "Shipped") {
      $("#sellerBoxDetail").show();
    } else {
      $("#sellerBoxDetail").hide();
    }
  });

  $("#manageCategories").click(function () {
    // alert("dcvsd")
    $.ajax({
      url: BASE_URL + "/api/admin_categories",
      type: "GET",
      success: function (response) {
        // Update the content of the #code element with the fetched data
        $("#code").html(response);
      },
      error: function () {
        // Handle any error that occurred during the AJAX request
        alert("An error occurred while fetching the content.");
      },
    });
  });

  $("#signUpBtn").click(function () {
    if (isNotValid("#signUpAdminEmail", "Please, provide your Email Address")) {
      isError = true;
    }

    if (isNotValid("#signUpAdminPassword", "Please, create your password")) {
      isError = true;
    }
    if (
      isNotValid("#signUpAdminConfirmPassword", "Please, confirm your password")
    ) {
      isError = true;
    }

    if ($("#signAdminName").val().length < 4) {
      isError = true;
      $("#signAdminNameError").css("color", "var(--red-dash)");
      $("#signAdminNameError").text("please, enter more than 3 letters");
    }

    if (isError) {
      return;
    }

    var formData = $("#signUpForm").serialize();
    var additionalData = {
      request_: "create_Admin",
    };
    var requestData = formData + "&" + $.param(additionalData);
    $.ajax({
      url: BASE_URL + "api/admin",
      type: "POST",
      data: requestData,
      dataType: "json", // Set the response data type to JSON

      success: function (response) {
        if (response.success) {
          $("#Admin_info").html(
            "<a class='nav-link' href='dashboard'>" +
              response.admin_name +
              "</a>"
          );
          $(".btn-close").click();
          window.location.href = BASE_URL + "admin/dashboard";
        }
      },
      error: function (xhr, status, error) {
        // Handle the error response
        $(".btn-close").click();
      },
    });
    // send all data to ajax.
  });

  function isNotValid(id, errorMessage) {
    if ($(id).val() == "") {
      $(id + "Error").text(errorMessage);
      color = $(id).css("border-color");
      $(id).css("border-color", "var(--red-dash)");

      return true;
    }
    return false;
  }

  $(".form-control").focus(function () {
    var c = $(this).attr("id");

    if ($("#" + c + "Error").text() != "") {
      $(this).css("border-color", color);
      $("#" + c + "Error").text("");

      if (c.toString() == "signUserPhoneNumber") {
        $("#basic-addon1").css("border-color", color);
      }
    }
  });
});
