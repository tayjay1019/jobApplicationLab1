var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false:
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}

function newrow() {
    document.getElementById("employmentTable").innerHTML += "<tr>\n" +
        "                <td>WORK EXPERIENCE<br>\n" +
        "                    Start with most recent position.</td>\n" +
        "            </tr>\n" +
        "            <tr>\n" +
        "                <td>\n" +
        "                    <label>Employer Name\n" +
        "                        <input name=\"Employer_1_Name\" type=\"text\">\n" +
        "                    </label></td>\n" +
        "            </tr>\n" +
        "            <tr>\n" +
        "                <td>\n" +
        "                    <label>Street Address or PO Box Number\n" +
        "                        <input name=\"Employer_1_Street\" type=\"text\">\n" +
        "                    </label></td>\n" +
        "            </tr>\n" +
        "            <tr>\n" +
        "                <td>\n" +
        "                    <label>City\n" +
        "                        <input name=\"Employer_1_City\" type=\"text\">\n" +
        "                    </label>\n" +
        "                    <label>State\n" +
        "                        <select name=\"Employer_1_State\">\n" +
        "                            <option selected=\"selected\" value=\"\"> </option>\n" +
        "                            <option>AL </option>\n" +
        "                            <option>AK </option>\n" +
        "                            <option>AZ </option>\n" +
        "                            <option>AR </option>\n" +
        "                            <option>CA </option>\n" +
        "                            <option>CO </option>\n" +
        "                            <option>CT </option>\n" +
        "                            <option>DE </option>\n" +
        "                            <option>DC </option>\n" +
        "                            <option>FL </option>\n" +
        "                            <option>GA </option>\n" +
        "                            <option>HI </option>\n" +
        "                            <option>ID </option>\n" +
        "                            <option>IL </option>\n" +
        "                            <option>IN </option>\n" +
        "                            <option>IA </option>\n" +
        "                            <option>KS </option>\n" +
        "                            <option>KY </option>\n" +
        "                            <option>LA </option>\n" +
        "                            <option>ME </option>\n" +
        "                            <option>MD </option>\n" +
        "                            <option>MA </option>\n" +
        "                            <option>MI </option>\n" +
        "                            <option>MN </option>\n" +
        "                            <option>MS </option>\n" +
        "                            <option>MO </option>\n" +
        "                            <option>MT </option>\n" +
        "                            <option>NE </option>\n" +
        "                            <option>NV </option>\n" +
        "                            <option>NH </option>\n" +
        "                            <option>NJ </option>\n" +
        "                            <option>NM </option>\n" +
        "                            <option>NY </option>\n" +
        "                            <option>NC </option>\n" +
        "                            <option>ND </option>\n" +
        "                            <option>OH </option>\n" +
        "                            <option>OK </option>\n" +
        "                            <option>OR </option>\n" +
        "                            <option>PA </option>\n" +
        "                            <option>PR </option>\n" +
        "                            <option>RI </option>\n" +
        "                            <option>SC </option>\n" +
        "                            <option>SD </option>\n" +
        "                            <option>TN </option>\n" +
        "                            <option>TX </option>\n" +
        "                            <option>UT </option>\n" +
        "                            <option>VT </option>\n" +
        "                            <option>VA </option>\n" +
        "                            <option>WA </option>\n" +
        "                            <option>WV </option>\n" +
        "                            <option>WI </option>\n" +
        "                            <option>WY </option>\n" +
        "                        </select>\n" +
        "                    </label>\n" +
        "                    <label>Zip Code\n" +
        "                        <input name=\"Employer_1_Zip\" type=\"text\">\n" +
        "                    </label></td>\n" +
        "            </tr>\n" +
        "            <tr>\n" +
        "                <td>\n" +
        "                    <label>Country\n" +
        "                        <select name=\"Employer_1_Country\">\n" +
        "                            <option selected=\"selected\" value=\"\"> </option>\n" +
        "                            <option value=\"US\">United States </option>\n" +
        "                            <option value=\"AE\">United Arab Emirates </option>\n" +
        "                            <option value=\"AF\">Afghanistan </option>\n" +
        "                            <option value=\"AG\">Antigua and Barbuda </option>\n" +
        "                            <option value=\"AL\">Albania </option>\n" +
        "                            <option value=\"AM\">Armenia </option>\n" +
        "                            <option value=\"AM\">Zambia </option>\n" +
        "                            <option value=\"AN\">Netherland Antilles </option>\n" +
        "                            <option value=\"AQ\">Antarctica </option>\n" +
        "                            <option value=\"AR\">Argentina </option>\n" +
        "                            <option value=\"AS\">American Samoa </option>\n" +
        "                            <option value=\"AT\">Austria </option>\n" +
        "                            <option value=\"AU\">Australia </option>\n" +
        "                            <option value=\"AW\">Aruba </option>\n" +
        "                            <option value=\"AZ\">Azerbaidjan </option>\n" +
        "                            <option value=\"BA\">Bosnia-Herzegovina </option>\n" +
        "                            <option value=\"BB\">Barbados </option>\n" +
        "                            <option value=\"BD\">Bangladesh </option>\n" +
        "                            <option value=\"BE\">Belgium </option>\n" +
        "                            <option value=\"BG\">Bulgaria </option>\n" +
        "                            <option value=\"BH\">Bahrain </option>\n" +
        "                            <option value=\"BM\">Bermuda </option>\n" +
        "                            <option value=\"BO\">Bolivia </option>\n" +
        "                            <option value=\"BR\">Brazil </option>\n" +
        "                            <option value=\"BS\">Bahamas </option>\n" +
        "                            <option value=\"BW\">Botswana </option>\n" +
        "                            <option value=\"BY\">Belarus </option>\n" +
        "                            <option value=\"BZ\">Belize </option>\n" +
        "                            <option value=\"CA\">Canada </option>\n" +
        "                            <option value=\"CG\">Congo </option>\n" +
        "                            <option value=\"CH\">Switzerland </option>\n" +
        "                            <option value=\"CL\">Chile </option>\n" +
        "                            <option value=\"CM\">Cameroon </option>\n" +
        "                            <option value=\"CN\">China </option>\n" +
        "                            <option value=\"CO\">Columbia </option>\n" +
        "                            <option value=\"CR\">Costa Rica </option>\n" +
        "                            <option value=\"CS\">Former Czechoslovakia </option>\n" +
        "                            <option value=\"CZ\">Czech Republic </option>\n" +
        "                            <option value=\"DE\">Germany </option>\n" +
        "                            <option value=\"DK\">Denmark </option>\n" +
        "                            <option value=\"DM\">Dominica </option>\n" +
        "                            <option value=\"DO\">Dominican Republic </option>\n" +
        "                            <option value=\"DZ\">Algeria </option>\n" +
        "                            <option value=\"EC\">Ecuador </option>\n" +
        "                            <option value=\"EE\">Estonia </option>\n" +
        "                            <option value=\"EG\">Egypt </option>\n" +
        "                            <option value=\"ES\">Spain </option>\n" +
        "                            <option value=\"ET\">Ethiopia </option>\n" +
        "                            <option value=\"FI\">Finland </option>\n" +
        "                            <option value=\"FJ\">Fiji </option>\n" +
        "                            <option value=\"FK\">Falkland Islands </option>\n" +
        "                            <option value=\"FR\">France </option>\n" +
        "                            <option value=\"GB\">Great Britain </option>\n" +
        "                            <option value=\"GD\">Grenada </option>\n" +
        "                            <option value=\"GE\">Georgia </option>\n" +
        "                            <option value=\"GF\">French Guyana </option>\n" +
        "                            <option value=\"GH\">Ghana </option>\n" +
        "                            <option value=\"GL\">Greenland </option>\n" +
        "                            <option value=\"GN\">Guinea </option>\n" +
        "                            <option value=\"GR\">Greece </option>\n" +
        "                            <option value=\"GT\">Guatamala </option>\n" +
        "                            <option value=\"GU\">Guam (USA) </option>\n" +
        "                            <option value=\"GY\">Guyana </option>\n" +
        "                            <option value=\"HK\">Hong Kong </option>\n" +
        "                            <option value=\"HN\">Honduras </option>\n" +
        "                            <option value=\"HR\">Croatia </option>\n" +
        "                            <option value=\"HT\">Haiti </option>\n" +
        "                            <option value=\"HU\">Hungary </option>\n" +
        "                            <option value=\"ID\">Indonesia </option>\n" +
        "                            <option value=\"IE\">Ireland </option>\n" +
        "                            <option value=\"IL\">Israel </option>\n" +
        "                            <option value=\"IN\">India </option>\n" +
        "                            <option value=\"IQ\">Iraq </option>\n" +
        "                            <option value=\"IR\">Iran </option>\n" +
        "                            <option value=\"IS\">Iceland </option>\n" +
        "                            <option value=\"IT\">Italy </option>\n" +
        "                            <option value=\"JM\">Jamaica </option>\n" +
        "                            <option value=\"JO\">Jordan </option>\n" +
        "                            <option value=\"JP\">Japan </option>\n" +
        "                            <option value=\"KE\">Kenya </option>\n" +
        "                            <option value=\"KP\">North Korea </option>\n" +
        "                            <option value=\"KR\">South Korea </option>\n" +
        "                            <option value=\"KW\">Kuwait </option>\n" +
        "                            <option value=\"KY\">Cayman Islands </option>\n" +
        "                            <option value=\"KZ\">Kazakhstan </option>\n" +
        "                            <option value=\"LA\">Laos </option>\n" +
        "                            <option value=\"LB\">Lebanon </option>\n" +
        "                            <option value=\"LC\">St. Lucia </option>\n" +
        "                            <option value=\"LI\">Liechtenstein </option>\n" +
        "                            <option value=\"LK\">Sri Lanka </option>\n" +
        "                            <option value=\"LR\">Liberia </option>\n" +
        "                            <option value=\"LT\">Lithuania </option>\n" +
        "                            <option value=\"LU\">Luxembourg </option>\n" +
        "                            <option value=\"LV\">Latvia </option>\n" +
        "                            <option value=\"LY\">Libya </option>\n" +
        "                            <option value=\"MA\">Morocco </option>\n" +
        "                            <option value=\"MC\">Monaco </option>\n" +
        "                            <option value=\"MD\">Moldavia </option>\n" +
        "                            <option value=\"MG\">Madagascar </option>\n" +
        "                            <option value=\"YU\">Macedonia </option>\n" +
        "                            <option value=\"MN\">Mongolia </option>\n" +
        "                            <option value=\"MQ\">Martinique (French) </option>\n" +
        "                            <option value=\"MS\">Montserrat </option>\n" +
        "                            <option value=\"MT\">Malta </option>\n" +
        "                            <option value=\"MX\">Mexico </option>\n" +
        "                            <option value=\"MY\">Malaysia </option>\n" +
        "                            <option value=\"MZ\">Mozambique </option>\n" +
        "                            <option value=\"NA\">Namibia </option>\n" +
        "                            <option value=\"NG\">Nigeria </option>\n" +
        "                            <option value=\"NI\">Nicaragua </option>\n" +
        "                            <option value=\"NL\">Netherlands </option>\n" +
        "                            <option value=\"NO\">Norway </option>\n" +
        "                            <option value=\"NP\">Nepal </option>\n" +
        "                            <option value=\"NZ\">New Zealand </option>\n" +
        "                            <option value=\"PA\">Panama </option>\n" +
        "                            <option value=\"PE\">Peru </option>\n" +
        "                            <option value=\"PH\">Phillipines </option>\n" +
        "                            <option value=\"PK\">Pakistan </option>\n" +
        "                            <option value=\"PL\">Poland </option>\n" +
        "                            <option value=\"PR\">Puerto Rico </option>\n" +
        "                            <option value=\"PT\">Portugal </option>\n" +
        "                            <option value=\"PY\">Paraguay </option>\n" +
        "                            <option value=\"QA\">Qatar </option>\n" +
        "                            <option value=\"RO\">Romania </option>\n" +
        "                            <option value=\"RU\">Russian Federation </option>\n" +
        "                            <option value=\"RW\">Rwanda </option>\n" +
        "                            <option value=\"SA\">Saudi Arabia </option>\n" +
        "                            <option value=\"RS\">Serbia </option>\n" +
        "                            <option value=\"YU\">Serbia and Montenegro </option>\n" +
        "                            <option value=\"SD\">Sudan </option>\n" +
        "                            <option value=\"SE\">Sweden </option>\n" +
        "                            <option value=\"SG\">Singapore </option>\n" +
        "                            <option value=\"SI\">Slovenia </option>\n" +
        "                            <option value=\"SK\">Slovak Republic </option>\n" +
        "                            <option value=\"SN\">Senegal </option>\n" +
        "                            <option value=\"SO\">Somalia </option>\n" +
        "                            <option value=\"SR\">Suriname </option>\n" +
        "                            <option value=\"SV\">El Salvador </option>\n" +
        "                            <option value=\"SY\">Syria </option>\n" +
        "                            <option value=\"SZ\">Swaziland </option>\n" +
        "                            <option value=\"TC\">Turks and Caicos Islands </option>\n" +
        "                            <option value=\"TD\">Chad </option>\n" +
        "                            <option value=\"TH\">Thailand </option>\n" +
        "                            <option value=\"TJ\">Tadjikistan </option>\n" +
        "                            <option value=\"TM\">Turkmenistan </option>\n" +
        "                            <option value=\"TN\">Tunisia </option>\n" +
        "                            <option value=\"TR\">Turkey </option>\n" +
        "                            <option value=\"TT\">Trinidad and Tabago </option>\n" +
        "                            <option value=\"TW\">Taiwan </option>\n" +
        "                            <option value=\"TZ\">Tanzania </option>\n" +
        "                            <option value=\"UA\">Ukraine </option>\n" +
        "                            <option value=\"UG\">Uganda </option>\n" +
        "                            <option value=\"GB\">United Kingdom </option>\n" +
        "                            <option value=\"UY\">Uruguay </option>\n" +
        "                            <option value=\"UZ\">Uzbekistan </option>\n" +
        "                            <option value=\"VA\">Vatican City </option>\n" +
        "                            <option value=\"VC\">St. Vincent &amp; Grenadines </option>\n" +
        "                            <option value=\"VE\">Venezuala </option>\n" +
        "                            <option value=\"VG\">Virgin Islands (British) </option>\n" +
        "                            <option value=\"VI\">Virgin Islands (USA) </option>\n" +
        "                            <option value=\"VN\">Vietnam </option>\n" +
        "                            <option value=\"WS\">Samoa </option>\n" +
        "                            <option value=\"YE\">Yemen </option>\n" +
        "                            <option value=\"ZA\">South Africa </option>\n" +
        "                            <option value=\"ZR\">Zaire </option>\n" +
        "                            <option value=\"ZW\">Zimbabwe </option>\n" +
        "                        </select>\n" +
        "                    </label>\n" +
        "                    <label>Telephone\n" +
        "                        <input name=\"Employer_1_Telephone\" type=\"text\">\n" +
        "                    </label></td>\n" +
        "            </tr>\n" +
        "            <tr>\n" +
        "                <td>\n" +
        "                    <label>Position\n" +
        "                        <input name=\"Employer_1_Position\" type=\"text\">\n" +
        "                    </label></td>\n" +
        "            </tr>\n" +
        "            <tr>\n" +
        "                <td>\n" +
        "                    <label>Supervisor's Name and Title\n" +
        "                        <input name=\"Employer_1_Supervisor\" type=\"text\">\n" +
        "                    </label></td>\n" +
        "            </tr>\n" +
        "            <tr>\n" +
        "                <td>\n" +
        "                    <label for=\"sd2\">Start Date\n" +
        "                        <input id=\"sd2\" name=\"Employer_1_Start_Date\" type=\"date\">\n" +
        "                    </label>\n" +
        "                    <label for=\"ed2\">End Date\n" +
        "                        <input id=\"ed2\" name=\"Employer_1_End_Date\" type=\"date\">\n" +
        "                    </label>\n" +
        "                </td>\n" +
        "            </tr>\n" +
        "            <tr>\n" +
        "                <td>May we contact this employer?\n" +
        "                    <label>Yes\n" +
        "                        <input name=\"Employer_1_Contact\" value=\"Y\" type=\"radio\">\n" +
        "                    </label>\n" +
        "                    <label>No\n" +
        "                        <input name=\"Employer_1_Contact\" value=\"N\" type=\"radio\">\n" +
        "                    </label>\n" +
        "                </td>\n" +
        "            </tr>\n" +
        "            <tr>\n" +
        "                <td>\n" +
        "                    <label>Specific Duties\n" +
        "                        <input name=\"Employer_1_Duties\" type=\"text\">\n" +
        "                    </label>\n" +
        "                </td>\n" +
        "            </tr>\n" +
        "            <tr>\n" +
        "                <td>\n" +
        "                    <label>Reason For Leaving\n" +
        "                        <input name=\"Employer_1_Reason_For_Leaving\" maxlength=\"30\" size=\"30\" type=\"text\">\n" +
        "                    </label>\n" +
        "                </td>\n" +
        "            </tr>";
}

function newSchool() {
    document.getElementById("schoolTable").innerHTML += "<tr>\n" +
        "                <td align=\"center\"><b>Name of School</b></td>\n" +
        "                <td align=\"center\"><b>Location</b></td>\n" +
        "                <td align=\"center\"><b>Degree Received</b></td>\n" +
        "                <td align=\"center\"><b>Field of Study</b></td>\n" +
        "                <td align=\"center\"><b>Graduate?<br>\n" +
        "                    (Y or N)</b></td>\n" +
        "            </tr>\n" +
        "            <tr>\n" +
        "                <td><input name=\"School_1_Name\" maxlength=\"17\" size=\"17\" type=\"text\"></td>\n" +
        "                <td><input name=\"School_1_Location\" maxlength=\"17\" size=\"17\" type=\"text\"></td>\n" +
        "                <td><input name=\"School_1_Degree_Received\" maxlength=\"17\" size=\"17\" type=\"text\"></td>\n" +
        "                <td><input name=\"School_1_Field_of_Study\" maxlength=\"17\" size=\"17\" type=\"text\"></td>\n" +
        "                <td><input name=\"School_1_Graduate\" maxlength=\"1\" size=\"1\" onchange=\"this.value=this.value.toUpperCase();\" type=\"text\"></td>\n" +
        "            </tr>";
}

function del(field) {
    field.parentNode.parentNode.outerHTML = "";
}

function del(field) {
    field.parentNode.parentNode.outerHTML = "";
}