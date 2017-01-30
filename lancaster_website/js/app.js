$(document).foundation();
//GOOGLE MAPS
$(function(){
    $('#mapUa').click(function(){
        $('#bottomRight').html('<iframe id="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10260.443511708416!2d36.23769853876649!3d49.99053064927242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0f21f398e03%3A0x658275917fd00f4c!2sKorolenka+St%2C+22%2C+Kharkiv%2C+Kharkiv+Oblast!5e0!3m2!1sen!2sua!4v1477061713631" frameborder="0" allowfullscreen></iframe>');
    });
    $('#mapLu').click(function(){
        $('#bottomRight').html('<iframe id="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.1678554850305!2d6.118187315701259!3d49.6134400793687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954ed4fce2d06b%3A0xd80c2bf94687c466!2s2+Boulevard+de+la+Foire%2C+1528+Luxembourg!5e0!3m2!1sfr!2ses!4v1476864811958" frameborder="0" allowfullscreen></iframe>');
    });

});
