'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
module.exports = {
    create : async ctx =>{
		console.log(ctx.request.body);
		var data=ctx.request.body;
		var questions=data.questions;
		var lowerEstimate=0;
		var upperEstimate=0;
		for(var i=0;i<questions.length;i++){
			for(var j=0;j<questions[i].options.length;j++){

				lowerEstimate+=questions[i].options[j].min_price;
				upperEstimate+=questions[i].options[j].max_price;
			}
		}
		data.lowerEstimate=lowerEstimate;
		data.upperEstimate=upperEstimate;
		var entity = await strapi.services.submission.create(data);
		return entity
	}
};
