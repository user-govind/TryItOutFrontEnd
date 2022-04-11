const Deals = () => {
  let close = () => {
    document.getElementById("deal").classList.add("d-none");
  };
  return (
    // <Container>
    //     Today's Deal! Free shipping over 800
    // </Container>
    <div
      class="alert alert-warning alert-dismissible fade show text-center m-0"
      id="deal"
      role="alert"
    >
      <button
        type="button"
        onClick={close}
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <marquee direction="right" behavior="fade" scrollamount="9">
        <span className="fs-3">
          <strong>Today's Deal!!</strong> Free shipping over 800
        </span>
      </marquee>
    </div>
  );
};

export default Deals;
