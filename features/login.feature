Feature: Login

  Scenario: Login to the VetDrive Application

    Given User launched VetDrive login page
    When User logged in vetDrive using the valid username and the valid password
    Then Calender page should be Open

  Scenario Outline: Login to the VetDrive Application with Wrong Password


    Given User launched VetDrive login page
    When User logged in VetDrive using the valid username "<userName>" and the wrong password "<password>"
    Then User should not get logged in

    Examples:
      | userName                   | password  |
      | alan.adams                 | Testing$1 |

  Scenario Outline: Login to the VetDrive Application with Wrong Password


    Given User launched VetDrive login page
    When User logged in VetDrive using the wrong username "<userName>" and the valid password "<password>"
    Then User should not get logged in

    Examples:
      | userName                   | password  |
      | testuser_negative          | alph@421  |

  Scenario Outline: Login to the VetDrive Application with Wrong Password


    Given User launched VetDrive login page
    When User logged in VetDrive using the wrong username "<userName>" and the wrong password "<password>"
    Then User should not get logged in

    Examples:
      | userName                   | password  |
      | testuser_negative          | Testing$1 |