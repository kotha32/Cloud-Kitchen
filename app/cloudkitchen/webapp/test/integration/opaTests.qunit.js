sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cloudkitchen/test/integration/FirstJourney',
		'cloudkitchen/test/integration/pages/kitchenList',
		'cloudkitchen/test/integration/pages/kitchenObjectPage'
    ],
    function(JourneyRunner, opaJourney, kitchenList, kitchenObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cloudkitchen') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThekitchenList: kitchenList,
					onThekitchenObjectPage: kitchenObjectPage
                }
            },
            opaJourney.run
        );
    }
);