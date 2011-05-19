<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="/WEB-INF/struts-html.tld" prefix="html" %>
<%@ taglib uri="/WEB-INF/struts-tiles.tld" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="im"%>

<!-- reportCustomDisplayers.jsp -->

<html:xhtml/>

<tiles:importAttribute name="reportObject"/>
<tiles:importAttribute name="placement"/>

<c:forEach items="${reportObject.reportDisplayers[placement]}" var="displayer">
    <tiles:insert name="customDisplayer.tile">
      <tiles:put name="displayer" beanName="displayer" />
      <tiles:put name="reportObject" beanName="reportObject" />
    </tiles:insert>
    <br />
</c:forEach>

<!-- /reportCustomDisplayers.jsp -->