"use strict";

module.exports = {
  create: async (ctx) => {
    var data = ctx.request.body;
    var questions = data.questions;
    var lowerEstimate = 0;
    var upperEstimate = 0;
    for (var i = 0; i < questions.length; i++) {
      for (var j = 0; j < questions[i].options.length; j++) {
        lowerEstimate += questions[i].options[j].min_price;
        upperEstimate += questions[i].options[j].max_price;
      }
    }
    data.lowerEstimate = lowerEstimate;
    data.upperEstimate = upperEstimate;

    var entity = await strapi.services.submission.create(data);
    await strapi.plugins['email-designer'].services.email.sendTemplatedEmail(
      {
        to: data.email,
        from: 'deekshithdeekshu64@gmail.com', 
        replyTo: 'deekshithdeekshu64@gmail.com',
        attachments: [],
      },
      {
        templateId: "61875fdf98de1239ecf76f1c",
        sourceCodeToTemplateId: 55,
        subject: ``,
      },
      data
    );
    return entity;
  },
};
