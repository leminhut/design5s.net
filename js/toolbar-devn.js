 function callme(url){

                        window.location = url;

                    }

                    (function ($) {

                        $(document).ready(function () {

                            function dcf_scroll_element(){

                                $top = jQuery(window).scrollTop();

                                if( $top &gt;= 50 &amp;&amp; !($(&#39;body&#39;).hasClass(&#39;show_contactfix&#39;)) ){

                                    $(&#39;body&#39;).addClass(&#39;show_contactfix&#39;);

                                }else if($top &lt; 50 &amp;&amp; $(&#39;body&#39;).hasClass(&#39;show_contactfix&#39;) ){

                                    $(&#39;body&#39;).removeClass(&#39;show_contactfix&#39;);

                                }

                            }

                            dcf_scroll_element();

                            $(window).scroll(function(){

                                dcf_scroll_element();

                            });

                        });

                    })(jQuery);
