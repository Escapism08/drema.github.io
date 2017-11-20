$('#quiz').quiz({
  resultsScreen: '#results-screen',
  counter: false,
  //homeButton: '#custom-home',
  // counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'لمن تقدم دريمة خدماتها؟',
      'options': [
        'المسنين',
        'الأيتام مجهولي النسب.',
        'ذووي الإحتياجات الخاصة.'
      ],
      'correctIndex': 0,

    
    },
    {
      'q': 'في اي منطقه يقع مركز دريمه؟',
      'options': [
        'الهلال',
        'عين خالد',
        'المعموره'
      ],
      'correctIndex': 2,
      
    },
    {
      'q': 'كم عدد المراكز التابعه لمؤسسة العمل الاجتماعي؟',
      'options': [
        '7',
        '3',
        '2'
      ],
      'correctIndex': 0,
     
    },
    {
      'q': 'ما معنى كلمة دريمه؟',
      'options': [
        'فراشه',
        'عصفور',
        'زهره'
      ],
      'correctIndex': 3,
    }
  ]
});