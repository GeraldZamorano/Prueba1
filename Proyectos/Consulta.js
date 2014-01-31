<script type="text/javascript">

$(document).ready(function () {

    $(":input[data-autocompletar]").each(function(){
    
    $(this).autocompletar({ source: $(this).attr("data-autocompletar") });
    
    });

})
</script>