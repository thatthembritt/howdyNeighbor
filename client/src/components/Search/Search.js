import React from "react";
import "./style.css";

export default function Search() {
  return (
    <div className="container">
      <div class="helper">
        <label>
          <input type="checkbox" class="checkoption" value="1" />
          <span>Yard Help</span>
        </label>
      </div>

      <div class="helper">
        <label>
          <input type="checkbox" class="checkoption" value="1" />
          <span>House Help</span>
        </label>
      </div>

      <div class="helper">
        <label>
          <input type="checkbox" class="checkoption" value="1" />
          <span>Auto Help</span>
        </label>
      </div>

      <div class="helper">
        <label>
          <input type="checkbox" class="checkoption" value="1" />
          <span>Tech Help</span>
        </label>
      </div>

      <div class="helper">
        <label>
          <input type="checkbox" class="checkoption" value="1" />
          <span>Pet Help</span>
        </label>
      </div>
      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
   <script type="text/javascript">
   $(document).ready(function(){

      $('.checkoption').click(function() {
         $('.checkoption').not(this).prop('checked', false);
      })

   });
   </script> */}
    </div>
  );
}
