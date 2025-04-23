describe("Http Requests",()=>{
    let sessionToken;
    let bundle_Id;

    it("POST call", ()=>{
        cy.request({
            method: 'POST',
            url: 'https://appapi.simyo.nl/webapi/api/v1/sessions',
            body:  {
                    phoneNumber: "0683570897", 
                    password: "1234"
                    
                   },
            headers: {
                "content-type": "application/json",
                "x-client-platform": 'mijn'
            },

        }).then((response)=>{
            expect(response.status).to.equal(200);
            sessionToken = response.body.result.sessionToken;
            // Cypress.env('sessionToken',response.body.result.sessionToken);  // if you want to set it as an env variable
        });

    });

    it("GET call", () => {
        cy.then(() => {
          cy.request({
            method: "GET",
            url: 'https://appapi.simyo.nl/webapi/api/v1/subscription/postpaid/topup/options',
            headers: {
              "content-type": "application/json",
              "x-client-platform": 'mijn',
              "x-session-token": sessionToken
              // "x-session-token": Cypress.env('sessionToken') //Retrieves from env
            },
          }).then((response) => {
            expect(response.status).to.equal(200);
            bundle_Id = response.body.result.bundles[0].id;
          });
        });
      });


    it("PUT call", ()=>{
        cy.log(sessionToken),
        cy.log(bundle_Id),
        cy.request({
            method: 'PUT',
            url: 'https://appapi.simyo.nl/webapi/api/v1/subscription/postpaid/topup',
            body:  {
                    bundleId: bundle_Id
                    
                   },
            headers: {
                "content-type": "application/json",
                "x-client-platform": 'mijn',
                "x-session-token": sessionToken
            },

        })
        .its('status')
        .should('equal',200);


    })


});
