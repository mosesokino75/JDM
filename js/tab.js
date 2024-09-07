const template = document.createElement('template');
template.innerHTML = `
      
<head>
  <link rel='stylesheet' href='htt.ps://cdn.rawgit.com/JacobLett/bootstrap4-latest/504729ba/bootstrap-4-latest.min.css'>
  <link rel="stylesheet" href="css/tab.css">
  <script src="js/tab.js"></script>
  
  <style>
      img {
          border-radius: 7px;
      }
  </style>

</head>
<!-- partial:index.partial.html -->
<div class="container mx-auto text-center text-secondary" style="padd.ing-top: 10vh; padding-bottom: 11vh;">
  <h3 class="text-dark mb-1">Project Showcase</h3>
  <p class="pb-4">Explore successful projects & results</p>

    <style>
        .nav-link{
            color: #00BCD4;
        }
    </style>

  <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link text-center active" data-toggle="tab" href="#tab1" role="tab" aria-controls="home" aria-expanded="true" style="font-size: 15px;">Constructs</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-center" data-toggle="tab" href="#tab2" role="tab" aria-controls="profile" style="font-size: 15px;">3D Models</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-center" data-toggle="tab" href="#tab3" role="tab" aria-controls="profile" style="font-size: 15px;">Interiors</a>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="1-tab">

      <div class="tab-pane-header d-none">
        <h2>Navivation Title (Nav-Tab 1)</h2>        
        <a href="#tab1" target="_blank">Link directly to this tab</a>

      </div>
      <div class="row"><div class="col-md-3 p-3">
          <img class="img-fluid" src="projects/c1.jpg">
        </div>
        <!---->
        <div class="col-md-3 p-3">
          <img class="img-fluid" src="projects/c2.jpg">
        </div>
        <!---->
        <div class="col-md-3 p-3">
          <img class="img-fluid" src="projects/c3.jpg">
        </div>
        <!---->
        <div class="col-md-3 p-0"></div>
        <!---->
        <div class="col-md-3 p-0"></div>
        <!---->
        <div class="col-md-3 p-3">
          <img class="img-fluid" src="projects/c4.jpg">
        </div>
        <!---->
        <div class="col-md-3 p-3">
          <img class="img-fluid" src="projects/c5.jpg">
        </div>
        <!---->
        <div class="col-md-3 p-3">
          <img class="img-fluid" src="projects/c6.jpg">
        </div>
        <!----></div>

      


    </div>
    <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="2-tab">

      <div class="tab-pane-header d-none">
        <h2>Navivation Title (Nav-Tab 2)</h2>        
        <a href="#tab2" target="_blank">Link directly to this tab</a>
      </div>
      <div class="row"><div class="col-md-3 p-3">
          <img class="img-fluid" src="images/box.png">
        </div>
        <!---->
        <div class="col-md-3 p-3">
          <img class="img-fluid" src="images/box.png">
        </div>
        <!---->
        <div class="col-md-3 p-3">
          <img class="img-fluid" src="images/box.png">
        </div>
        <!---->
        <div class="col-md-3 p-0"></div>
        <!---->
        <div class="col-md-3 p-0"></div>
        <!---->
        <div class="col-md-3 p-3">
          <img class="img-fluid" src="images/box.png">
        </div>
        <!---->
        <div class="col-md-3 p-3">
          <img class="img-fluid" src="images/box.png">
        </div>
        <!---->
        <div class="col-md-3 p-3">
          <img class="img-fluid" src="images/box.png">
        </div>
        <!----></div>

    </div>
    <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="3-tab">

      <div class="tab-pane-header d-none">
        <h2>Navivation Title (Nav-Tab 3)</h2>
        <a href="#tab3" target="_blank">Link directly to this tab</a>
      </div>
      <div class="row"><div class="col-md-3 p-3">
          <img class="img-fluid" src="projects/i1.jpg">
        </div>
        <!---->
        <div class="col-md-3 p-3">
          <img class="img-fluid" src="projects/i2.jpg">
        </div>
        <!---->
        <div class="col-md-3 p-3">
          <img class="img-fluid" src="projects/i3.jpg">
        </div>
        <!---->
        <div class="col-md-3 p-0"></div>
        <!---->
        <div class="col-md-3 p-0"></div>
        <!---->
        <div class="col-md-3 p-3">
          <img class="img-fluid" src="projects/i4.jpg">
        </div>
        <!---->
        <div class="col-md-3 p-3">
          <img class="img-fluid" src="projects/i5.jpg">
        </div>
        <!---->
        <div class="col-md-3 p-3">
          <img class="img-fluid" src="projects/i6.jpg">
        </div>
        <!----></div>

    </div>
  </div>

<!--  -->
              <div class="col-md-12 mt-4 mx-auto text-center">
                  <a href="projects.html" class="btn btn-info" target="_blank" role="button">See Portfolio</a>
              </div>
              <!--  -->
</div>
<!-- /.container -->
<!-- partial -->
<script>
    $(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready

  
   if (location.hash !== '') $('a[href="' + location.hash + '"]').tab('show');
      return $('a[data-toggle="tab"]').on('shown', function(e) {
      return location.hash = $(e.target).attr('href').substr(1);
    });
  
  
// document ready  
});
</script>
  <script src='https://code.jquery.com/jquery-3.2.1.slim.min.js'></script>
<script src='https://cdn.rawgit.com/JacobLett/bootstrap4-latest/504729ba/bootstrap-4-latest.min.js'></script><script  src="./script.js"></script>

`
document.body.appendChild(template.content);


